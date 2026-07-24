import { Button, ContentPadder, Header } from "@/components";
import WidthLimiter from "@/components/Atoms/WidthLimiter";
import { FC } from "react";
import {
  BoldPresentationText,
  ButtonWrapper,
  ContentWrapper,
  Gabao,
  ImageWrapper,
  InnerContentWrapper,
  PresentationText,
  PresentationTextWrapper,
  PresentationTitle,
  PresentationWrapper,
  Wrapper,
} from "./styles";

type Props = {
  onClick?: () => void;
};

const Hero: FC<Props> = ({ onClick }) => {
  return (
    <Wrapper>
      <Header />
      <ContentPadder>
        <ContentWrapper>
          <WidthLimiter>
            <InnerContentWrapper>
              <PresentationWrapper>
                <PresentationTitle>Hi, I&lsquo;m Gabão</PresentationTitle>
                <PresentationTextWrapper>
                  <PresentationText>
                    I&lsquo;m a <BoldPresentationText>frontend-focused full-stack developer</BoldPresentationText> specializing in React, React Native and TypeScript, with backend experience in Node.js, NestJS, Vue and Python. Most of my work is in <BoldPresentationText>fintech</BoldPresentationText> — and I&lsquo;m open to remote contract roles with US &amp; EU companies.
                  </PresentationText>
                </PresentationTextWrapper>
                <ButtonWrapper>
                  <Button
                    labelVariant="headline6"
                    label="Get in touch"
                    bckColor="colors.primary.main"
                    onClick={onClick}
                  />
                </ButtonWrapper>
              </PresentationWrapper>
              <ImageWrapper>
                <Gabao />
              </ImageWrapper>
            </InnerContentWrapper>
          </WidthLimiter>
        </ContentWrapper>
      </ContentPadder>
    </Wrapper>
  );
};

export default Hero;
