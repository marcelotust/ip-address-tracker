import { createGlobalStyle } from "styled-components";
import Rubik from "/assets/fonts/Rubik-Regular.ttf";
import RubikMedium from "/assets/fonts/Rubik-Medium.ttf";
import RubikBold from "/assets/fonts/Rubik-Bold.ttf";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Rubik Regular';
  src: url(${Rubik}) format('sans-serif');
  font-weight: 400;
}

@font-face {
  font-family: 'Rubik Medium';
  src: url(${RubikMedium}) format('sans-serif');
  font-weight: 500;
}

@font-face {
  font-family: 'Rubik Bold';
  src: url(${RubikBold}) format('sans-serif');
  font-weight: 700;
}

body {
  font-family: 'Rubik', sans-serif;
}
`;

export default FontStyles;