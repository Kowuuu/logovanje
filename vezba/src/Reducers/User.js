export const initialUserData={
    username:null,
    isLoggedIn:false,
    time:null
};
export const getInitialUserData=()=>{
    const userData=localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : initialUserData;
}
export const userReducer=(state,action)=>{
    switch(action.type){
        case"SET_USERNAME":
            return {...state,username: action.payload};
        case "SET_IS_LOGGED_IN":
            return {...state,isLoggedIn:action.payload};
            case "SET_TIME":
                return {...state,time:action.payload};
        default:
            return state;
    }
};