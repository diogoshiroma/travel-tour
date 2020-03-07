import { Residence } from "../../model/entities";
import { CalendarEvent } from "./model";
import { getCalendarEvents } from "./requests";

export const getResidenceById = (id: number): Residence | null  => {
  const residences = datasourceResidences.filter(res => res.id === id);
  return residences.length > 0 ? residences[0] : null;
}

export const populateCalendarEvents = async () => {
  const res: CalendarEvent[] = await getCalendarEvents();
  console.log(res);
  if (res.length > 0) {
    console.log('Dados carregados corretamente: ' + res.length + ' carregadas.');
  } else {
    console.log('Nenhum dado carregado');
  }
}

export const datasourceResidences: Residence[] = [
  // Campos do Jordão
  {
    id: 1,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-17'), new Date('2020-02-18'), new Date('2020-02-19'), new Date('2020-02-20')],
  },
  {
    id: 2,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Superior",
    city: "Campos do Jordão",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-21'), new Date('2020-02-22'), new Date('2020-02-27'), new Date('2020-02-28')],
  },
  {
    id: 3,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-23'), new Date('2020-02-24')],
  },
  {
    id: 4,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Standard",
    city: "Campos do Jordão",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-25'), new Date('2020-02-26')],
  },

  // São Paulo
  {
    id: 5,
    hotel: "Hotel Golden Park",
    address: "Rodovia Floriano Rodrigues Pinheiro, 2000",
    bedroomName: "Quarto Duplo Superior",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-19'), new Date('2020-02-20')],
  },
  {
    id: 6,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo Standard",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-19'), new Date('2020-02-20')],
  },
  {
    id: 7,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Duplo King",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-23'), new Date('2020-02-24')],
  },
  {
    id: 8,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Triplo",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-25'), new Date('2020-02-26')],
  },
  {
    id: 9,
    hotel: "Hotel Leão da Montanha",
    address: "Rua Dr. Raul Mesquita, 443",
    bedroomName: "Quarto Casal",
    city: "São Paulo",
    availablePlaces: 2,
    busyDays: [new Date('2020-02-27'), new Date('2020-02-28'), new Date('2020-02-29')],
  },
];