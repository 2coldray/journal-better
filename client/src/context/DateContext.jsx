import React from "react";
import {format, startOfWeek, endOfWeek, eachDayOfInterval as eachDay} from "date-fns"

// TODO: Get Internet time and put into this context
const Today = format(new Date(), 'PPP');
const StartofWeek = startOfWeek(new Date());
const EndofWeek = endOfWeek(new Date());
const FullWeek = eachDay({start:StartofWeek, end:EndofWeek});
const FormattedWeek = FullWeek.map(day => format(day, 'PPP'));


const DateContext = React.createContext({
    Today: Today,
    Week: FormattedWeek,
    StartWeek: StartofWeek,
    FullWeek: FormattedWeek
});

export default DateContext;