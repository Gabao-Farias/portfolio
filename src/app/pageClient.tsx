"use client";
import { Setup } from "@/assets";
import { ImageBck, InfoCard, LinkButtonCard, PageWrapper } from "@/components";
import { InfoCardProps } from "@/components/Molecules/InfoCard";
import { Socials } from "@/components/Molecules/LinkButtonCard";
import Resume from "@/components/Organisms/Resume";
import { PortfolioSection, Section } from "@/components/Templates";
import Hero from "@/components/Templates/Hero";
import {
  DEFAULT_ABOUT_SECTION_ID,
  DEFAULT_CONTACTS_SECTION_ID,
  DEFAULT_RESUME_SECTION_ID,
  DEFAULT_SERVICES_SECTION_ID,
  scrollToID,
} from "@/utils";
import { FieldValues, useForm } from "react-hook-form";
import { ValuesType } from "./form";
import { CardItemWrapper, CardsWrapper, ImageWrapper } from "./styles";

export default function PageClient() {
  const { handleSubmit, control } = useForm();

  const openLink = () => {};

  const onSubmit = (data: FieldValues) => {
    const dataTyped = data as ValuesType;

    console.log(dataTyped);
  };

  const socials: Socials[] = [
    // {
    //   btnText: "Discord",
    //   icon: "discord",
    //   onClick: () => ({}),
    //   preventDefaultOnClick: true,
    // },
    {
      btnText: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/in/gabriel-taborda-farias-26b9b8160/",
    },
    {
      btnText: "Github",
      icon: "github",
      href: "https://github.com/Gabao-Farias",
    },
    {
      btnText: "E-mail",
      icon: "gmail",
      href: "mailto:gabrielfariasbass@gmail.com?subject=Portfolio",
    },
    {
      btnText: "Instagram",
      icon: "instagram",
      href: "https://www.instagram.com/gabaofarias/",
    },
    {
      btnText: "Medium",
      icon: "medium",
      href: "https://gabrielfariasbass.medium.com/",
    },
  ];

  const defaultInfoCards: (InfoCardProps & { key: string })[] = [
    {
      key: "0",
      label:
        "Great platforms usually counts with a mobile app for their users, as they deliver several benefits to the business.",
      title: "Mobile",
      icon: "mobile",
    },
    {
      key: "1",
      label:
        "The presence in the Web is also very important to your business, making it more professional, delivering trustness and security to your clients.",
      title: "Web",
      icon: "application",
    },
  ];

  return (
    <PageWrapper>
      <Hero onClick={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)} />

      <Section
        id={DEFAULT_ABOUT_SECTION_ID}
        buttonLabel="Get in touch"
        text="Started my journey in technology actually when I was 3 years old, but started to get deeper on it in 2018 in the Computer Science Bachelor's course at Universidade Regional Integrada do Alto Uruguai e das Missões. Currently I work as a Freelancer and I keep studying to improve my services and raise knowledge in technology."
        title="About"
        invertSide
        onPress={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)}
      >
        <ImageWrapper>
          <ImageBck src={Setup.src} />
        </ImageWrapper>
      </Section>

      <Section
        id={DEFAULT_SERVICES_SECTION_ID}
        buttonLabel="Get in touch"
        text="As the main expertise is at the Front-End, naturally, React and React Native are the most used technologies, also Next.js for the web in the contexts where SEO is a high priority."
        title="Services"
        onPress={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)}
      >
        <CardsWrapper>
          {defaultInfoCards.map((props) => (
            <CardItemWrapper key={props.key}>
              <InfoCard {...props} />
            </CardItemWrapper>
          ))}
        </CardsWrapper>
      </Section>

      <PortfolioSection />

      <Section
        id={DEFAULT_RESUME_SECTION_ID}
        buttonLabel="Get in touch"
        text="My resume is also available in PDF for download on both Portuguese (native language) and English versions."
        title="Resume"
        invertSide
        onPress={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)}
      >
        <Resume />
      </Section>

      <Section
        buttonLabel="Get in touch"
        text="Here you can find several options where you can contact me, go for the one that is more suitable for you!"
        title="Contact"
        id={DEFAULT_CONTACTS_SECTION_ID}
        onPress={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)}
      >
        <CardsWrapper>
          {socials.map((props) => (
            <CardItemWrapper key={props.icon + props.btnText}>
              <LinkButtonCard {...props} />
            </CardItemWrapper>
          ))}
        </CardsWrapper>
      </Section>
    </PageWrapper>
  );
}
