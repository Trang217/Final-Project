// ---- hooks, dependencies, styling import ----
import { useState } from "react";
import axios from "../../utils/axiosInstance";

// ---- COMPONENT ----
import ErrorMessage from "../LoginAndRegistration/ErrorMessage";

const EditAccount = ({ currentFirstName, currentUserName, currentEmail }) => {
  //? ---- hooks ----

  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  //? ---- event handlers ----

  const handleEditSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const editData = {
      firstName: formData.get("firstName") || currentFirstName,
      userName: formData.get("userName") || currentUserName,
      email: formData.get("email") || currentEmail,
    };

    try {
      const response = await axios.patch("/api/users/update", editData);
      if (response.status === 200) {
        console.log("user updated!");
        setMessage(response.data.message);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorMessage(error.response.data.message);
    }
  };

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
    setErrorMessage("");
  };

  //? ---- rendering ----
  return (
    <div className="accountModal">
      <h1>Edit account detail!</h1>

      {message.length ? (
        <p>
          {message} <br /> <p>Refresh page to see your new information</p>
        </p>
      ) : (
        <form onSubmit={handleEditSubmit}>
          <div className="input-container">
            <input
              value={firstName}
              id="firstName"
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={(e) => handleInputChange(e, setFirstName)}
            />
          </div>
          <div className="input-container">
            <input
              value={userName}
              id="userName"
              type="text"
              name="userName"
              placeholder="Username"
              onChange={(e) => handleInputChange(e, setUserName)}
            />
          </div>
          <div className="input-container">
            <input
              value={email}
              id="email"
              type="email"
              name="email"
              placeholder="myemail@gmail.com"
              onChange={(e) => handleInputChange(e, setEmail)}
            />
          </div>
          <button className="saveBtn">Save changes</button>
          <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
        </form>
      )}
    </div>
  );
};
export default EditAccount;
