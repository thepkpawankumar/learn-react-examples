import { useState, useEffect } from "react"

export const useIsOnline = () => {

    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {

        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    },[isOnline]);
    
    return isOnline;
}