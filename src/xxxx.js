import React, { useState, createContext, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

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
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </Router>
  );
}

function MainComponents() {
  return (
    <Router>
      <Route path='/' component={Main} />
      <Route path='/profile' component={Login} />
    </Router>
  );
}


function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
  
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  return (
    <>
      {user ? <MainComponents /> : <AuthComponents />}
    </>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}

/* 
  Login.js
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Login success'))
        .catch(err => console.log(`Login err: ${err}`));
    }
  };

*/