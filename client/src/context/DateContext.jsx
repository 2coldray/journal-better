import React from "react";
import {format, startOfWeek, endOfWeek, eachDayOfInterval as eachDay, subDays, subMonths} from "date-fns"

// TODO: Get Internet time and put into this context
const Today = format(new Date(), 'PPP');
const StartofWeek = startOfWeek(new Date());
const EndofWeek = endOfWeek(new Date());
const FullWeek = eachDay({start:StartofWeek, end:EndofWeek});
const FormattedWeek = FullWeek.map(day => format(day, 'PPP'));
const CurrentMonth = format(new Date(), 'MMMM');

// TODO: Calculate past week
const LastWeekEndDate = subDays(StartofWeek, 1);
const LastWeekStartDate = startOfWeek(LastWeekEndDate);
const LastWeek = eachDay({
    start: LastWeekStartDate,
    end: LastWeekEndDate
});
const FormattedLastWeek = LastWeek.map(day => format(day, 'PPP'));

// TODO: Calculate past month
const LastMonth = subMonths(new Date(), 1);
const FormattedLastMonth = format(LastMonth, 'MMMM');

const DateContext = React.createContext({
    Today: Today,
    Week: FormattedWeek,
    Month: CurrentMonth,
    LastWeek: FormattedLastWeek,
    LastMonth: FormattedLastMonth

});

export default DateContext;