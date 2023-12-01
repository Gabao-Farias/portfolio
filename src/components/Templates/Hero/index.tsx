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
                    I&lsquo;m a processor of coffee and pizza that reads
                    sketches, wireframes and turn them into connected, beautiful
                    and fluid user experiences by writing code. Exactly!
                    I&lsquo;m a
                    <BoldPresentationText>
                      {" "}
                      Front-End Developer
                    </BoldPresentationText>
                    .
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
