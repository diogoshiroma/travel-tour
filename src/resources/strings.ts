export let Strings = {
  AppName: 'Travel Simple',
  Components: {
    Residence: {
      AvailablePlaces: "Vagas disponíveis: "
    },
    ResidencesForm: {
      City: "Cidade",
      CheckinDate: "Data de entrada",
      CheckoutDate: "Data de saída",
      Submit: "Buscar quartos!",
      NoResFound: "Nenhum quarto encontrado! :-(",
      DateFormat: "Formato: (DD/MM/AAAA)",
      Placeholder: {
        City: "Informe a cidade de destino",
        CheckinDate: "Informe a data de entrada",
        CheckoutDate: "Informe a data de saída",
      },
    },
    ResidenceDetail: {
      AvailablePlacesLbl: 'Vagas disponíveis: ',
      BookNowYourRoom: 'Reserve agora o seu quarto: ',
      BuyRoom: 'Comprar',
      NoResFound: "Nenhum quarto encontrado! :-(",
    },
  },
  Pages: {
    NotFound: 'Esta página não existe :-(',
  },
  Error: { 
    ResidencesForm: {
      InvalidDateFormat: "Formato de data incorreto",
      NonExistingDate: "Data não existente",
      EmptyCity: "Digite o nome da cidade",
      CheckingAfterCheckout: "A data de entrada deve ser anterior à data de saída",
    }
  },
};
