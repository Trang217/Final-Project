// ---- hooks, dependencies, styling import ----
import user from "./data.json";

// ---- components ----

// ---- context import ----

// ---- data ----

// ---- COMPONENT ----

const AccountDetails = () => {
  //? ---- hooks ----

  //? ---- event handlers ----

  //? ---- variables ----

  const { firstName, userName, email } = user; // get data from user db

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
        Edit my Account details
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
