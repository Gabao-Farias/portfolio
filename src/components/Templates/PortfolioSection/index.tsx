import {
  ExampleiFuteBanner,
  ExampleOwmApiApp,
  ExampleSB,
  ExampleSolarDashboard,
  ExampleSweetLandingLight,
} from "@/assets";
import { ContentPadder, ProjectCard, WidthLimiter } from "@/components";
import { ProjectCardType } from "@/components/Molecules/ProjectCard";
import { DEFAULT_PORTFOLIO_SECTION_ID, getPlatform } from "@/utils";
import { FC } from "react";
import {
  ContentWrapper,
  Description,
  DescriptionWrapper,
  PortfolioExternalWrapper,
  PortfolioWrapper,
  ProjectCardItem,
  Title,
  TitleWrapper,
  Wrapper,
} from "./styles";

const examples: ProjectCardType[] = [
  {
    title: "Solar Dashboard",
    description:
      "A simple dashboard created to visualize data from a solar power plant, located at university of URI Santo Ângelo. In this specific project I went fullstack.",
    imageSrc: ExampleSolarDashboard,
    href: "https://dancing-torte-fe54b0.netlify.app/",
    techs: [
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
      "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/-MobX-FF9955?style=for-the-badge&labelColor=FF9955&logo=mobx&logoColor=white",
      "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/axios-%23764ABC.svg?style=for-the-badge&logo=axios&logoColor=white",
    ],
  },
  {
    title: "Sweet Landing",
    description:
      "This is a Landing Page created to practice animations in css and how to integrate them with Styled Components and React.",
    imageSrc: ExampleSweetLandingLight,
    href: "https://lovely-custard-cea282.netlify.app/",
    techs: [
      "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    ],
  },
  {
    title: "Open Weather Api Test",
    description:
      "Another project that I went full stack, including the React Native App and the backend. If you try it out you might see that takes a little time for the server to turn on again on call.",
    imageSrc: ExampleOwmApiApp,
    href: "https://play.google.com/store/apps/details?id=com.owmapitest",
    techs: [
      "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/redux-%23764ABC.svg?style=for-the-badge&logo=redux&logoColor=white",
      "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white",
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
      "https://img.shields.io/badge/apollo%20graphql-%23764ABC.svg?style=for-the-badge&logo=apollographql&logoColor=white",
      "https://img.shields.io/badge/fastlane-00F200?style=for-the-badge&logo=fastlane&logoColor=00F200&color=black",
    ],
  },
  {
    title: "SB Landing Page",
    description:
      "This is a landing page made for an authorized distributor of Eko'7. It was built based on a previous template made on React, but in this case, converted to work with Next.js.",
    imageSrc: ExampleSB,
    href: "https://sognarebene.com.br/",
    techs: [
      "https://img.shields.io/badge/nextjs-%2320232a.svg?style=for-the-badge&logo=next.js&logoColor=%23ffffff",
      "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
    ],
  },
  {
    title: "iFute",
    description:
      "On this project I handled the whole thing, including designs, infrastructure, back-end and front-end. It's also available at App Store and Google Play!",
    imageSrc: ExampleiFuteBanner,
    href: getPlatform() === 'iOS' || getPlatform() === 'macOS' ? "https://apps.apple.com/br/app/ifute-sports/id6743678053?l=en-GB" : "https://play.google.com/store/apps/details?id=com.ifute&hl=en",
    techs: [
      "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
      "https://img.shields.io/badge/postgresql-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white",
      "https://img.shields.io/badge/nginx-009639?style=for-the-badge&logo=nginx&logoColor=white",
      "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
      "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white",
      "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white",
      "https://img.shields.io/badge/fastlane-00F200?style=for-the-badge&logo=fastlane&logoColor=00F200&color=black",
      "https://img.shields.io/badge/pm2-2B037A?style=for-the-badge&logo=pm2&logoColor=white",
      "https://img.shields.io/badge/expressjs-000000?style=for-the-badge&logo=express&logoColor=white",
    ],
  },
];

const PortfolioSection: FC = ({}) => {
  return (
    <Wrapper id={DEFAULT_PORTFOLIO_SECTION_ID}>
      <ContentPadder>
        <PortfolioExternalWrapper>
          <WidthLimiter>
            <ContentWrapper>
              <TitleWrapper>
                <Title>Portfolio</Title>
              </TitleWrapper>

              <DescriptionWrapper>
                <Description>
                  Below it&lsquo;s possible to see and understand which contexts
                  and technologies I have already worked on and you can also see
                  if any of them match your particular needs, or even the
                  industry that you actuate.
                </Description>
              </DescriptionWrapper>

              <PortfolioWrapper>
                {examples.map((item) => (
                  <ProjectCardItem key={item.href}>
                    <ProjectCard {...item} />
                  </ProjectCardItem>
                ))}
              </PortfolioWrapper>
            </ContentWrapper>
          </WidthLimiter>
        </PortfolioExternalWrapper>
      </ContentPadder>
    </Wrapper>
  );
};

export default PortfolioSection;
