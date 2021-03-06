import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React, { useState, createContext, useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import MainPage from "./components/MainPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { auth } from "./firebase";

const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function AuthComponents() {
  return (
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/" component={Signup} />
    </Router>
  );
}

function MainComponents() {
  return (
    <Router>
      <Route path="/" component={MainPage} />
      <Route path="/profile" component={Login} />
    </Router>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        console.log("authenticatedUser", authenticatedUser);
        // setIsLoading(false);
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  return <>{user ? <MainComponents /> : <AuthComponents />}</>;
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
