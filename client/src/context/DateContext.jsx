import React from "react";

const DateContext = React.createContext({
    Today: "Thursday",
    Week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
});

export default DateContext;