export const events = [
  {
    id: '1',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
    title: 'Cumpleanios de fernando',
    notes: 'Alguna nota',
  },
  {
    id: '2',
    start: new Date('2022-11-09 13:00:00'),
    end: new Date('2022-11-09 15:00:00'),
    title: 'Cumpleanios de Melisa',
    notes: 'Alguna nota de Melisa',
  },
];

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
};

export const calendarWithEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: null,
};

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [...events],
  activeEvent: { ...events[0] },
};
