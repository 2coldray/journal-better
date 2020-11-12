import React from "react";

// TODO: Get Internet time and put into this context

const DateContext = React.createContext({
    Today: "Thursday",
    Week: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
});

export default DateContext;