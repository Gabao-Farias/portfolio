import { getThemeByPath } from "@/utils";
import styled from "styled-components";

const insaneSpacing = getThemeByPath("spacings.insane");

const smallSpacing = getThemeByPath("spacings.short");

const tablet = getThemeByPath("breakpoints.tablet");

const ContentPadder = styled.div`
  display: flex;
  flex: 1;
  padding: 0 ${insaneSpacing}px;

  @media (max-width: ${tablet}px) {
    padding: 0 ${smallSpacing}px;
  }
`;

export default ContentPadder;
