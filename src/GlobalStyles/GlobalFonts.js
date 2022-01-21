import { createGlobalStyle } from "styled-components";
import CaveatBrush from "./fonts/CaveatBrush-Regular.ttf";

const FontStyles = createGlobalStyle`
@font-face {
    font-family: "CaveatBrush";
    src: url(${CaveatBrush});
}
`;
export default FontStyles;
