const nodemailer = require("nodemailer");
const pug = require("pug");
const htmlToText = require("html-to-text");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.firstName.split(" ")[0];
    this.url = url;
    this.from =
      process.env.NODE_ENV === "production"
        ? `OIKO <${process.env.EMAIL_FROM_PROD}>`
        : `OIKO <${process.env.EMAIL_FROM_DEV}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "SendGrid",
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST_DEV,
      port: process.env.EMAIL_PORT_DEV,
      auth: {
        user: process.env.EMAIL_USERNAME_DEV,
        pass: process.env.EMAIL_PASSWORD_DEV,
      },
    });
  }

  async send(template, subject) {
    // render html based on a pug template
    const html = pug.renderFile(`${__dirname}/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });

    //define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html),
    };

    // create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "Welcome to OIKO!");
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      "Reset your password (valid for only 10 minutes)"
    );
  }
};
