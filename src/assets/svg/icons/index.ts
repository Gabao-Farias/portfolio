import Application from "./Application";
import Discord from "./Discord";
import Github from "./Github";
import GMail from "./Gmail";
import Instagram from "./Instagram";
import LinkedIn from "./LinkedIn";
import Medium from "./Medium";
import Mobile from "./Mobile";
import Moon from "./Moon";
import Servers from "./Servers";
import Sun from "./Sun";

export const SVGIcons = {
  moon: Moon,
  sun: Sun,
  mobile: Mobile,
  application: Application,
  github: Github,
  instagram: Instagram,
  discord: Discord,
  gmail: GMail,
  medium: Medium,
  linkedin: LinkedIn,
  servers: Servers,
};

export type SVGIconKeys = keyof typeof SVGIcons;

export type SVGIconKeysGenericMapper<T = string> = {
  [x in SVGIconKeys]: T;
};
