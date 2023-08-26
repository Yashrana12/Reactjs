import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export default function Auth({ children }) {
  let [user, setUser] = useState();

  const navigate = useNavigate();

  function login(name) {
    localStorage.setItem("loginUser", name);
    navigate("/");
  }

  function logout() {
    localStorage.removeItem("loginUser");
    navigate("/login");
  }

  useEffect(() => {
    let data = localStorage.getItem("loginUser");
    setUser(data);
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ login, logout, user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
}

export const userAuth = () => {
  return useContext(AuthContext);
};
