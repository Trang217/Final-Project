// ---- hooks, dependencies, styling import ----
import { useState, useEffect } from "react";
import axios from "../../utils/axiosInstance";
import Modal from "react-modal";
import EditAccount from "./EditAccount";
import DeleteAccount from "./DeleteAccount";

// ---- COMPONENT ----

const AccountDetails = () => {
  //? ---- hooks ----
  const [data, setData] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
  }, [editModalOpen]);

  //? ---- event handlers ----

  const handleEditModal = () => {
    setEditModalOpen(!editModalOpen);
  };

  const handleDeleteModal = () => {
    setDeleteModalOpen(!deleteModalOpen);
  };

  //? ---- variables ----
  const { firstName, userName, email } = data;

  //? ---- rendering ----
  return (
    <div className="accountDetails">
      <h1>Account Details</h1>

      <table>
        <tbody>
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
        </tbody>
      </table>

      <button onClick={handleEditModal}>Edit information</button>

      <button onClick={handleDeleteModal}>Delete this account</button>

      {editModalOpen ? (
        <Modal
          isOpen={editModalOpen}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(204, 196, 157, 0.5)",
            },
            content: {
              border: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="accountDetails">
            <button className="accountModalBtn" onClick={handleEditModal}>
              X
            </button>
            <EditAccount
              currentFirstName={firstName}
              currentUserName={userName}
              currentEmail={email}
            />
          </div>
        </Modal>
      ) : null}

      {deleteModalOpen ? (
        <Modal
          isOpen={deleteModalOpen}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(204, 196, 157, 0.5)",
            },
            content: {
              border: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <div className="accountDetails">
            <button className="accountModalBtn" onClick={handleDeleteModal}>
              X
            </button>
            <DeleteAccount />
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
export default AccountDetails;
