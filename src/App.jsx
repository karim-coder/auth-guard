import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import { AuthGuard, NoAuthGuard } from "./RouteGuards";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";

const App = () => {
  const auth = false; // Set your authentication status here

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthGuard auth={auth}>
                <Home />
              </AuthGuard>
            }
          />
          <Route
            path="/login"
            element={
              <NoAuthGuard auth={auth}>
                <Login />
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
