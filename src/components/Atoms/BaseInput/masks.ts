import { InputMasksGenericMapper } from "./types";

const maskCPF = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/([0-9]{3})([0-9])/, "$1.$2")
    .replace(/([0-9]{3})([0-9])/, "$1.$2")
    .replace(/([0-9]{3})([0-9]{1,2})/, "$1-$2")
    .replace(/(-[0-9]{2})[0-9]+?$/, "$1");
};

const maskCEP = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})(\d+?)$/, "$1");
};

const maskPhone = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
};

const maskOnlyNumbers = (value: string): string => {
  return value.replace(/\D/g, "");
};

const maskOnlyLetters = (value: string): string => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

export const MASKS: InputMasksGenericMapper<(v: string) => string> = {
  cpf: maskCPF,
  cep: maskCEP,
  phone: maskPhone,
  onlyLetters: maskOnlyLetters,
  onlyNumbers: maskOnlyNumbers,
};
