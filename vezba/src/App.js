import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import Navigation from "./Partials/Navigation";
import {createContext, useReducer} from "react";
import {getInitialUserData, userReducer} from "./Reducers/User";

export const UserContext = createContext();

function App() {
    const [userState,userDispatch]=useReducer(userReducer,getInitialUserData());
  return (
      <BrowserRouter>
          <UserContext.Provider value={{userState,userDispatch}}>
              <Navigation />
              <Routes>
                  <Route path="/login" element={<Login />} ></Route>
              </Routes>
          </UserContext.Provider>
      </BrowserRouter>
  );
}

export default App;
