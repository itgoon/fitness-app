import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 

* {
    font-family: "Pretendard",'Apple SD Gothic Neo';
  }

 :root{  
  
  --layout-padding: 16px;
  --layout-padding-horizontal : 0px 16px; 

     --background-color :  #F9F9F9;
     
      --border-color :#72717166;
      --bg-color :#7271710D;

      --salary-bg-color : #F2F2F2;
      --salary-border-color : #00000021;
      --setting-icon-color : #ACB4BE;


    --primary-color :   #4682B4; //#23B2E9; 
    --primary-bg-color :#4682B433; 
    --primary-disabled-color :#A6CEDE;

    
 
    --secondary-color : #FED400;
    --light-color : #727171;
    --dark-color : #06152B;
    --danger-color : #E53873;
 --safety-color : #3AC87C;
 --success-color : #936EE9;
 --warning-color : #F9B959;

 --disabled-color : #EBEBEB;

 --social-google-color : #CB4F40;
 --social-naver-color :  #00C300;
 --social-apple-color : #000000;
 --social-kakao-color : #FFFF00;

 --menu-commute-color : #936EE9;
 --menu-employee-color : #F99959;
 --menu-contract-color :#3AC87C;
 --menu-paystub-color :#E53873;
 --resign-color :#ffffff33;



 --work-card-bg-color : #76A0D61F;
 --work-card-color :  #76A0D6;


    --transparent-color : transparent;



    --red-color : #f00;
    --blue-color : #00f;
    --error-color : #FC5356; 

    --white-color: #fff;

    --white-color-100: #f4f4f4;  // 50
    --white-color-300:#ddd; // 100
    --white-color-400:  #ccc;// 200
    --white-color-600: #b5b5b5; // 300
    --white-color-150: #B0B1B5; //400
    --white-color-700: #9BA1AA; // 500
    --white-color-50:  #CEDADC80;  //600
    --white-color-500: #666F7C; //700

    --white-color-800: #69727F; // 800 
    
    --white-color-200: #7271710d; // 900
    --white-color-999: #212121; // 999
    --black-color : #000; 
 }
 body {
    width : 100%;

//  height : 100vh;
    overflow : hidden;
    background : var(--background-color);
    position : relative; 

    #root {    
       width : inherit; 
       height : inherit;
       overflow : hidden;
       background : var(--background-color);
      //  background : #f00;


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
