import React, { FC } from 'react';
import { InnerImage } from './styles';

type Props = {
  src?: string;
};

const ImageBck: FC<Props> = ({ src, ...rest }) => (
  <InnerImage src={src} {...rest} />
);

export default ImageBck;
