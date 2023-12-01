import { ImageBck, Typography } from "@/components/Atoms";
import { StaticImageData } from "next/image";
import React from "react";
import {
  Anchor,
  DescriptionWrapper,
  ImageWrapper,
  InnerWrapper,
  SubtitleWrapper,
  TechBadge,
  TechItemWrapper,
  TechsWrapper,
  TextWrapper,
} from "./styles";

export type ProjectCardType = {
  description: string;
  title: string;
  imageSrc: StaticImageData;
  href: string;
  /**
   * URLs of the technologies used in the project. Currently using badges from shield.io.
   */
  techs?: string[];
};

const ProjectCard: React.FC<ProjectCardType> = ({
  imageSrc,
  description = "Some longer text here and, well... you know... lots of words that may contain sense or even not, just a bunch of words...",
  title = "Some title",
  href = "https://main--dancing-torte-fe54b0.netlify.app/",
  techs = [],
}) => (
  <Anchor href={href}>
    <ImageWrapper>
      <ImageBck src={imageSrc.src} />
    </ImageWrapper>
    <InnerWrapper>
      <TextWrapper>
        <Typography variant="header">{title}</Typography>
        <DescriptionWrapper>
          <Typography>{description}</Typography>
        </DescriptionWrapper>
        <SubtitleWrapper>
          <Typography variant="header">Technologies</Typography>
        </SubtitleWrapper>
        <DescriptionWrapper>
          <TechsWrapper>
            {techs.map((badge) => (
              <TechItemWrapper key={badge}>
                <TechBadge alt="Technology Badge" src={badge} />
              </TechItemWrapper>
            ))}
          </TechsWrapper>
        </DescriptionWrapper>
      </TextWrapper>
    </InnerWrapper>
  </Anchor>
);

export default ProjectCard;
