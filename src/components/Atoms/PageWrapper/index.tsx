import React, { PropsWithChildren } from "react";
import { Wrapper } from "./styles";

const PageWrapper: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default PageWrapper;
