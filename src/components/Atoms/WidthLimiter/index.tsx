import styled from "styled-components";

const defaultMaxWidth = 1800;

const WidthLimiter = styled.div`
  display: flex;
  flex: 1;
  max-width: ${defaultMaxWidth}px;
`;

export default WidthLimiter;
