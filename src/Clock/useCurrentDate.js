import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMyDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const dateRender = myDate.toLocaleDateString(undefined, {
        month: "long",
        weekday: "long",
        day: "numeric",
        year: "numeric",
    });

    const timeRender = myDate.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return {
        myDate,
        dateRender,
        timeRender,
    };
};