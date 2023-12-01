import React, { PropsWithChildren } from "react";

type Props = {
  condition?: boolean;
};

const If: React.FC<PropsWithChildren<Props>> = ({ children, condition }) =>
  condition ? <>{children}</> : null;

export default If;
