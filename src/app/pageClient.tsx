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
  DEFAULT_EXPERIENCE_SECTION_ID,
  DEFAULT_RESUME_SECTION_ID,
  DEFAULT_SERVICES_SECTION_ID,
  scrollToID,
} from "@/utils";
import { CardItemWrapper, CardsWrapper, ImageWrapper } from "./styles";

export default function PageClient() {
  const socials: Socials[] = [
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
      btnText: "Medium",
      icon: "medium",
      href: "https://gabrielfariasbass.medium.com/",
    },
  ];

  const defaultInfoCards: (InfoCardProps & { key: string })[] = [
    {
      key: "0",
      label:
        "Great platforms usually count with a mobile app for their users, as it delivers several benefits to the business.",
      title: "Mobile",
      icon: "mobile",
    },
    {
      key: "1",
      label:
        "A strong presence on the Web is also important to your business, making it more professional and delivering trust and security to your clients.",
      title: "Web",
      icon: "application",
    },
    {
      key: "2",
      label:
        "And finally, to give life to all those screens, flows and interactions, both data and logic are needed — that's where the back-end comes in.",
      title: "Back-end",
      icon: "servers",
    },
  ];

  const experienceCards: (InfoCardProps & { key: string })[] = [
    {
      key: "0",
      title: "60,000+ users",
      label:
        "Shipped a white-label React Native app (iOS & Android) reaching a combined 60,000+ users across multiple fintech clients.",
      icon: "mobile",
    },
    {
      key: "1",
      title: "White-label architecture",
      label:
        "Designed a per-client white-label customization architecture on a single shared codebase, so each client can heavily customize their app without affecting the others.",
      icon: "application",
    },
    {
      key: "2",
      title: "Payments",
      label:
        "Integrated PIX and Bitcoin Lightning as payment methods, working across financial and credit products.",
      icon: "servers",
    },
  ];

  return (
    <PageWrapper>
      <Hero onClick={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)} />

      <Section
        id={DEFAULT_ABOUT_SECTION_ID}
        buttonLabel="Get in touch"
        text="I started my journey in technology in 2018, during my Computer Science Bachelor's at Universidade Regional Integrada do Alto Uruguai e das Missões (URI). My first role was at Platform Builders, working on the front end of a digital-bank mobile app, where experienced developers taught me a lot about web and mobile development. Today I'm a frontend-focused full-stack developer working mainly in fintech — currently as a frontend developer at Finaya, building white-label apps for financial and credit products, alongside full-stack work at SAN Internet."
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
        text="I specialize in React, React Native and TypeScript, with solid backend experience in Node.js, NestJS, Vue and Python — which lets me deliver across the back-end, web and mobile."
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

      <Section
        id={DEFAULT_EXPERIENCE_SECTION_ID}
        buttonLabel="Get in touch"
        text="A few highlights from my work: I raised a company's public rating from 3.7 to 4.3 in about three months with a client-review strategy, and improved customer satisfaction by ~16.22% by centralizing logging with Graylog. I'm also co-author of a peer-reviewed book chapter (Atena Editora, 2025) on a hardware/software architecture for solar-plant data acquisition, where I built the Node.js/Express backend (served with Nginx), the database integration and the React dashboard."
        title="Experience & impact"
        onPress={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)}
      >
        <CardsWrapper>
          {experienceCards.map((props) => (
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
        text="My resume is also available in PDF for download, in both Portuguese (native language) and English versions."
        title="Resume"
        invertSide
        onPress={() => scrollToID(DEFAULT_CONTACTS_SECTION_ID)}
      >
        <Resume />
      </Section>

      <Section
        buttonLabel="Get in touch"
        text="Here you can find several ways to reach me — go for the one that suits you best!"
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
