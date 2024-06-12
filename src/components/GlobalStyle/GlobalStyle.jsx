import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root{
        --main-color: #94d2ff; // 배경
        --first-color : #a9dbff; 
        --second-color : #feffdc; // 카드
        --point-color : rgb(255, 46, 143); // 버튼, 호버
        --text : #0b0255;
    }
    *{
        box-sizing: border-box;
    }
    body{
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    #root{
        width: 900px;
        height: 80%;
        min-height: 800px;
    }

`;

export default GlobalStyle;
