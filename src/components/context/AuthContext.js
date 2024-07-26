import { createContext, useContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        // Check if running in a browser environment before accessing localStorage
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem("User");
            if (storedUser) {
                setAuthUser(JSON.parse(storedUser));
            }
        }
    }, []);
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
}