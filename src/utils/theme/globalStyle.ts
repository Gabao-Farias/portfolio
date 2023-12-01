import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

const { tablet } = breakpoints;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    @media (max-width: ${tablet}px) {
      font-size: 0.7rem;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  button,
  input,
  select {
    border: none;
    outline: none;
    background-color: #0000;
  }
`;
