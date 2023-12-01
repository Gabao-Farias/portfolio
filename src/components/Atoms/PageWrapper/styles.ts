import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const environmentMain = getThemeByPath("colors.environment.main");

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: ${environmentMain};
`;
