import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase";

// 导出 {currentUser, setCurrentUser} 供组件使用
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});
// 用来包裹<App />
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsuscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsuscribe;
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
