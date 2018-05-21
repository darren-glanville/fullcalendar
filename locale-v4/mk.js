import * as FullCalendar from 'fullcalendar';

FullCalendar.locale("mk", {
  buttonText: {
    prev: "претходно",
    next: "следно",
    today: "Денес",
    month: "Месец",
    week: "Недела",
    day: "Ден",
    list: "График"
  },
  allDayText: "Цел ден",
  eventLimitText: function(n) {
    return "+повеќе " + n;
  },
  noEventsMessage: "Нема настани за прикажување"
});
