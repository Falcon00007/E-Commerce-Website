import React,{useState} from 'react'


const AuthContext = React.createContext({
    token : "",
    isLoggedIn: false,
    login: (token)=>{},
    logout: ()=>{}
});

export const AuthContextProvider =(props)=>{
    const [token, setToken]= useState(localStorage.getItem('token'));

    const userIsLoggedIn= !!token; //returns true or false deoending on if token is a string or null... if token is not emoty, return true and vice versa
    
    const loginHandler =(token)=>{
        localStorage.setItem('token', token);
        setToken(token)
    }
    const logoutHandler=()=>{
        setToken(null); 
        localStorage.removeItem('token')
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;