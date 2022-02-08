// ---- hooks, dependencies, styling import ----
import React, { useState } from "react";
import axios from "../../utils/axiosInstance";

// ---- COMPONENT ----
import ErrorMessage from "../LoginAndRegistration/ErrorMessage";

const ForgetPassword = () => {
  //? ---- hooks ----
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  //? ---- event handlers ----

  const handleForgetPasswordSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const forgetPasswordData = {
      email: formData.get("email"),
    };

    try {
      const response = await axios.post(
        "/api/users/forgotPassword",
        forgetPasswordData
      );
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      console.log(error);
      setIsError(true);

      setErrorMessage(error.response.data.message);
      console.log(errorMessage);
    }
  };

  const onInputChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  return (
    <div className="forget-password">
      <h1> Forgot your password? </h1>

      <form onSubmit={handleForgetPasswordSubmit}>
        <label htmlFor="email">Enter your email:</label>
        <div className="input-container">
          <input
            value={email}
            required
            id="email"
            type="email"
            name="email"
            placeholder="myemail@gmail.com"
            onChange={onInputChange}
          />
        </div>
        <button className="">Submit</button>
        <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
        <p>{message}</p>
      </form>
    </div>
  );
};

export default ForgetPassword;
