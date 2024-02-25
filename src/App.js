import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import './App.css';
import History from "./component/History";
import Home from "./component/Home";
import Job from "./component/Job";
import JobItem from "./component/JobItem";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Placement from "./component/Placement";
import Register from "./component/Register";
import User from "./component/User";
import Training from "./component/training/Training";



function App() {
  const [user, setLoginUser] = useState("");
  const [progress, setProgress] = useState(0);
  const [profile, setProfile] = useState(true);
  return (
    // <UserContext.Provider>
    <div className='App'>
      <Router>
        {!user || !profile ? (
          ""
        ) : (
          <Navbar setLoginUser={setLoginUser} user={user} />
        )}
        {!user ? (
          " "
        ) : (
          <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
          />
        )}
        <Routes>
          {user ? (
            <Route
              exact
              path="/"
              element={
                <Home setLoginUser={setLoginUser} user={user} />
              }
            ></Route>
          ) : (
            <Route
              exact
              path="/"
              element={<Login setLoginUser={setLoginUser} />}
            ></Route>
          )}
          <Route
            exact
            path="/placement"
            element={
              <Placement
                setLoginUser={setLoginUser} user={user}
                setProgress={setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/jobitem"
            element={
              <JobItem
                setProgress={setProgress}
              />
            }
          ></Route>
          <Route
            exact
            path="/training"
            element={
              <Training
              />
            }
          ></Route>
          <Route
            exact
            path="/history"
            element={
              <History
              />
            }
          ></Route>
          <Route
            exact
            path="/user"
            element={
              <User
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
          <Route
            exact
            path="/job"
            element={
              <Job
              />
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <Login
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>
          <Route
            exact
            path="/register"
            element={
              <Register
                setLoginUser={setLoginUser}
                setProfile={setProfile}
                profile={profile}
                user={user}
              />
            }
          ></Route>

        </Routes>
      </Router>
    </div>
    // </UserContext.Provider>
  )
}

export default App;

