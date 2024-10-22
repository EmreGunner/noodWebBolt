import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#4e9350',
    secondary: '#83b775',
    accent: '#e0e5ba',
    text: '#534b4e',
    background: '#f7f9f0',
    white: '#ffffff',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
    xxxlarge: '2.5rem',
    huge: '3rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xlarge: '2rem',
    xxlarge: '3rem',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
    full: '9999px',
  },
};

export type Theme = typeof theme;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  * {
    box-sizing: border-box;
  }
`;
