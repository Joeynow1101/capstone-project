import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   
}

:root {
    --primary: #FDE8CE;
    --primary-one: #504538;
    --secondary: #B6A999;

}

body {
    background: var(--primary);
    
}
`;
