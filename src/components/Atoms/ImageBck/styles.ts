import styled from 'styled-components';

type InnerImageProps = {
  src?: string;
};

const handleImgBckURL = ({ src }: InnerImageProps) =>
  `url(${String(src || '')})`;

export const InnerImage = styled.div<InnerImageProps>`
  display: flex;
  flex: 1;
  background-image: ${handleImgBckURL};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;
