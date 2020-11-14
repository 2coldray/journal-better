import React from "react";
import {format, startOfWeek, endOfWeek, eachDayOfInterval as eachDay, subDays} from "date-fns"

// TODO: Get Internet time and put into this context
const Today = format(new Date(), 'PPP');
const StartofWeek = startOfWeek(new Date());
const EndofWeek = endOfWeek(new Date());
const FullWeek = eachDay({start:StartofWeek, end:EndofWeek});
const FormattedWeek = FullWeek.map(day => format(day, 'PPP'));

// TODO: Calculate past week, past Month
const LastWeekEndDate = subDays(StartofWeek, 1);
const LastWeekStartDate = startOfWeek(LastWeekEndDate);
const LastWeek = eachDay({
    start: LastWeekStartDate,
    end: LastWeekEndDate
});
const FormattedLastWeek = LastWeek.map(day => format(day, 'PPP'));


const DateContext = React.createContext({
    Today: Today,
    Week: FormattedWeek,
    LastWeek: FormattedLastWeek
});

export default DateContext;