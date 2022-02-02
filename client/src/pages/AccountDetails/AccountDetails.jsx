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
    <div>
      <h1>Account Details</h1>
      <div>
        <p>Name: {firstName}</p>
        <p>username: {userName}</p>
        <p>Email address: {email}</p>
      </div>
      <button
        onClick={() => alert("edit information")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit information
      </button>
      <button
        onClick={() => alert("delete account")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Delete Account
      </button>
    </div>
  );
};
export default AccountDetails;
