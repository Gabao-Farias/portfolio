"use client";
import { CVImage } from "@/assets";
import { Button, ImageBck } from "@/components";
import { useRouter } from "next/navigation";
import { FC } from "react";
import {
  ButtonSeparator,
  DownloadCVWrapper,
  ImageWrapper,
  Wrapper,
} from "./styles";

const Resume: FC = () => {
  const router = useRouter();
  const englishCVURL = `/cv/cv-english.pdf`;
  const portugueseCVURL = `/cv/cv-portuguese.pdf`;

  const onclickEnglishCV = () => {
    if (window) {
      console.log(router);
    }
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageBck src={CVImage.src} />
      </ImageWrapper>
      <DownloadCVWrapper>
        <ButtonSeparator href={englishCVURL}>
          <Button label="Preview CV English" onClick={onclickEnglishCV} />
        </ButtonSeparator>
        <ButtonSeparator href={portugueseCVURL}>
          <Button
            txtColor="colors.primary.main"
            bckColor="colors.primary.textContrast"
            label="Preview CV Portuguese"
          />
        </ButtonSeparator>
      </DownloadCVWrapper>
    </Wrapper>
  );
};

export default Resume;
