import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :root{
      --primaryColor: #3F94AB;
      --secondaryColor: #00b0ff;
      
      --white: #ffffff;
      --whiteGray: #ededed;
  }

  .container{
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1350px;
    margin: 0 auto;

    @media (max-width: 992px){
      max-width: 960px;
    }
    @media (max-width: 768px){
      max-width: 720px;
    }
    @media (max-width: 576px){
      max-width: 100%;
    }
  }

`