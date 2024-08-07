import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{ color?: string }>` 

* {
    font-family: "Pretendard",'Apple SD Gothic Neo';
  }

 :root{  
  
  --layout-padding: 16px;
  --layout-padding-horizontal : 0px 16px; 

 
 }
 body {
    width : 100%;

//  height : 100vh;
    overflow : hidden; 
    position : relative; 

    #root {    
       width : inherit; 
       height : inherit;
       overflow : hidden; 


       }
     h1,h2,h3,h4,h5,h6, p{
    margin : 0px;
   }

    
  button:hover {
    border-color: var(--transparent-color);
  }

  button:focus {
    outline: 0px;
  }

  .hiddenScroll::-webkit-scrollbar {
    display: none; 
}
.MuiDrawer-root {
  z-index : 9999;
}
 
 

 
`;

export default GlobalStyles;
