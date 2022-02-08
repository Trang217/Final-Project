// ---- hooks, dependencies, styling import ----
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axiosInstance";

// ---- COMPONENT ----
import ErrorMessage from "../LoginAndRegistration/ErrorMessage";

const ResetPassword = () => {
  //? ---- variables ----
  const { token } = useParams();
  console.log(token);
  //? ---- hooks ----
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  //? ---- event handlers ----

  const handleForgetPasswordSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const resetPasswordData = {
      password: formData.get("password"),
    };

    try {
      const response = await axios.patch(
        `/api/users/resetPassword/${token}`,
        resetPasswordData
      );
      setMessage(response.data.message);
      setPassword("");
    } catch (error) {
      console.log(error);
      setIsError(true);

      setErrorMessage(error.response.data.message);
      console.log(errorMessage);
    }
  };

  const onInputChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  return (
    <div className="forget-password">
      <h1> Reset your new password!</h1>

      <form onSubmit={handleForgetPasswordSubmit}>
        <label htmlFor="password">Enter your new password:</label>
        <div className="input-container">
          <input
            value={password}
            required
            id="password"
            type="password"
            name="password"
            placeholder=" ******"
            onChange={onInputChange}
          />
        </div>
        <button>Submit</button>
        <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
        <p>{message}</p>
        <button>Back to Sign In</button>
      </form>
    </div>
  );
};

export default ResetPassword;
