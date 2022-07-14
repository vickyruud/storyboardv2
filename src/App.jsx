import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import { login, register } from "./utils/user";
import StoryList from "./components/StoryList";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Story from "./components/Story";

export const AppContext = createContext();

const App = () => {
  const [stories, setStories] = useState(
    JSON.parse(localStorage.getItem("stories")) || []
  );
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const fetchStories = () => {
    return axios.get("/stories").then((res) => {
      setStories(res.data);
      localStorage.setItem("stories", JSON.stringify(res.data));
      return;
    });
  };

  const fetchUsers = () => {
    return axios.get("/users").then((res) => {
      setUsers(res.data);
      localStorage.setItem("users", JSON.stringify(res.data));
    });
  };

  const handleRegister = (user) => {
    register(user)
      .then((res) => {
        const decoded = jwt_decode(res.data.token);
        setLoggedUser(decoded);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(decoded));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (user) => {
    login(user)
      .then((res) => {
        const decoded = jwt_decode(res.data.token);
        setLoggedUser(decoded);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(decoded));
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    setLoggedUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const updateStory = (story) => {
    return axios
      .post(`/stories/:${story._id}`, story)
      .then((res) => {
        return fetchStories();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //maintains login on refresh
  useEffect(() => {
    if (!loggedUser) {
      const token = localStorage.getItem("token");
      if (token !== null) {
        axios
          .get("/auto-login", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setLoggedUser(res.data.user);
            localStorage.setItem("user", JSON.stringify(res.data.user));
          })
          .catch((error) => console.log(error));
      }
    }
  }, [loggedUser]);

  const saveStory = (story) => {
    return axios.post("api/stories", story).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    fetchStories();
    fetchUsers();
  }, []);

  const appContextValue = {
    handleLogin,
    handleRegister,
    handleLogout,
    saveStory,
    updateStory,
    stories,
    showModal,
    setShowModal,
    modalType,
    setModalType,
    loggedUser,
    users,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <BrowserRouter>
        <NavBar />
        <Modal />
        <div className="flex flex-col justify-center items-center bg-orange-100 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="stories" element={<StoryList />} />
            <Route path="/stories/:id" element={<Story />} />
          </Routes>
          <Outlet />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
