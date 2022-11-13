import styled from "styled-components";

export const MainContainer = styled.main`
   background-color:#e9e9e9;
    max-width: 500px;
    margin: 0 10px;
    padding: 15px 30px 10px 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px black;
    height: 440px;
    
    @media (max-width: 474px) {
        height: 480px;
        margin: 10px;
    }

    @media (max-width: 413px) {
        height: 520px;
    }

    @media (max-width: 357px) {
        height: 570px;
    }
`;