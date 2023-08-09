import React,{useState, createContext} from 'react'


const AuthContext = createContext({
    token : "",
    isLoggedIn: false,
    userEmail: "",
    login: (token)=>{},
    logout: ()=>{}
});

export const AuthContextProvider =(props)=>{
    const [token, setToken]= useState(localStorage.getItem('token'));
    const [userMail, setUserMail] = useState(null);

    let userIsLoggedIn= !!token; //returns true or false deoending on if token is a string or null... if token is not emoty, return true and vice versa
    

    const loginHandler =(token,email)=>{
        localStorage.setItem('token', token);
        setToken(token)
        let userEmail="";
        for(let i of email){
            if(i!=="." || i!=="@"){
                userEmail+=i;
            }
        }
        setUserMail(userEmail);
    }
    const logoutHandler=()=>{
        setToken(null); 
        localStorage.removeItem('token')
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        userEmail: userMail,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;