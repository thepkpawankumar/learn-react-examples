import { useState, useEffect } from "react"

export const useIsOnline = () => {

    const [isOnline, setOnline] = useState(false);

    useEffect(() => {

        const handleOnlieStatus = isOnline => setOnline(isOnline);
        window.addEventListener("online", handleOnlieStatus(true));
        window.addEventListener("offline", handleOnlieStatus(false));

        return () => {
            window.removeEventListener("online", handleOnlieStatus);
            window.removeEventListener("offline", handleOnlieStatus);
        }
    },[isOnline]);
    
    return isOnline;
}