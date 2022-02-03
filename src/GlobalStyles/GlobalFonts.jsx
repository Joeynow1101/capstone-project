import { createGlobalStyle } from 'styled-components';
import CaveatBrush from './fonts/CaveatBrush-Regular.ttf';
import Raleway from './fonts/Raleway-VariableFont_wght.ttf';

const FontStyles = createGlobalStyle`
@font-face {
    font-family: "CaveatBrush";
    src: url(${CaveatBrush});
}
@font-face {
    font-family: "Raleway";
    src: url(${Raleway});
}
`;
export default FontStyles;
