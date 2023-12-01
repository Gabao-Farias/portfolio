export const BASE_HOUR_PRICE_LABEL = "Preço base por hora";

export type ValuesType = {
  name: string;
  description: string;
  brandImage: string;
};

export const formPlaceDataRender: FormDataRender[] = [
  {
    name: "name",
    label: "Nome",
    placeholder: "Arena da Esquina",
  },
  {
    name: "description",
    label: "Descrição",
    placeholder: "A melhor esquina para jogar um fute!",
  },
  {
    name: "motivation",
    description: "Escreva aqui um motivo interessante",
    label: "Motivo",
    disabled: true,
  },
];
