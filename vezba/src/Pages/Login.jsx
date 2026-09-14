import users from '../Data/users.json';
import {useContext, useEffect, useReducer, useState} from "react";
import {initialUserData, userReducer} from "../Reducers/User";
import {UserContext} from "../App";

const Login =()=>{
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const[loginError, setLoginError] = useState(null);

    const {userState,userDispatch}=useContext(UserContext);

    const checkcredentials=()=> {
        if (username == null || password == null || username.trim() === '' || password.trim() === '') {
            setLoginError("Niste uneli sifru ili username");
            return;
        }
        let foundUser = false;
        users.forEach((user, index) => {
            if (user.username === username && user.password === password) {
                foundUser = true;
                setLoginError("Uspesan login");
                userDispatch({type:"SET_USERNAME",payload:username});
                userDispatch({type:"SET_IS_LOGGED_IN",payload:true});
                userDispatch({type:"SET_TIME",payload:new Date().getTime()});
            }
        })
        if (!foundUser) {
            setLoginError("Nismo nasli takvog korisnika");
        }
    }
    useEffect(() => {
        if(userState.isLoggedIn){
            localStorage.setItem("userData",JSON.stringify(userState));
        }
    },[useState]);

    return (
        <>
            {!userState.isLoggedIn &&
        <form>
            <p>{loginError}</p>
            <input onInput={e=>setUsername(e.currentTarget.value) }placeholder="Unesi username" type="text"/>
            <input onInput={e=>setPassword(e.currentTarget.value) }placeholder="Unesi password" type="password"/>
            <button type="button" onClick={checkcredentials}>Login</button>
        </form>
            }
        </>
    )
}
export default Login;