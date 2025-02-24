import { createContext, useState } from "react";


const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const[isAuthenticated, setIsAuthenticated]=useState(
        localStorage.setItem("auth")==="true"?true:false
    );

      // Login function
  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return(
         <AuthContext.Provider value={{isAuthenticated, login,logout}}>
            {children}
         </AuthContext.Provider>
  );
};

export default AuthContext;