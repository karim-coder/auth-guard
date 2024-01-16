import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { AuthGuard, NoAuthGuard } from "./RouteGuards";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";

const App = () => {
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("userData")) ? true : false
  );
  const getUserData = () => {
    const userDataString = localStorage.getItem("userData");
    const user = userDataString ? JSON.parse(userDataString) : null;

    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const setUserData = () => {
    const user = {
      name: "John Doe",
      age: 30,
    };

    // When you want to save the user data
    localStorage.setItem("userData", JSON.stringify(user));
    getUserData();
  };
  const logOut = () => {
    localStorage.removeItem("userData");
    getUserData();
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthGuard auth={isLogin}>
                <Home logOut={logOut} />
              </AuthGuard>
            }
          />
          <Route
            path="/login"
            element={
              <NoAuthGuard auth={isLogin}>
                <Login login={setUserData} />
              </NoAuthGuard>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
