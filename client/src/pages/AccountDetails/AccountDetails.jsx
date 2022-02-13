// ---- hooks, dependencies, styling import ----
import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";

// ---- COMPONENT ----

const AccountDetails = () => {
  //? ---- hooks ----
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/profile");
        setData(res.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //? ---- event handlers ----

  //! DELETE ACCOUNT

  //? ---- variables ----
  const { firstName, userName, email } = data;

  //? ---- rendering ----
  return (
    <div className="accountDetails">
      <h1>Account Details</h1>

      <table>
        <tr>
          <td>Your name</td>
          <td>{firstName}</td>
        </tr>
        <tr>
          <td>username</td>
          <td>{userName}</td>
        </tr>
        <tr>
          <td>email address</td>
          <td>{email}</td>
        </tr>
      </table>

      <button onClick={() => alert("delete account")}>Delete this account</button>

      {/* <button
        onClick={() => alert("edit information")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit information
      </button> */}
    </div>
  );
};
export default AccountDetails;
