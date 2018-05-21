import * as FullCalendar from 'fullcalendar';

FullCalendar.locale("fr", {
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: "Précédent",
    next: "Suivant",
    today: "Aujourd'hui",
    year: "Année",
    month: "Mois",
    week: "Semaine",
    day: "Jour",
    list: "Mon planning"
  },
  allDayHtml: "Toute la<br/>journée",
  eventLimitText: "en plus",
  noEventsMessage: "Aucun événement à afficher"
});
