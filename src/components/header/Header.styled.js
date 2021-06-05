import styled from 'styled-components';

export const StyledHeader = styled.div `

    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: linear-gradient(170deg, rgba(79,88,97,1) 0%, rgba(100,132,164,1) 100%);
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        justify-content: center;
    }

    * {
        margin: 0px;
    }

    .text-container {
        @media (min-width: ${({ theme }) => theme.desktop}) {
            flex-direction: row;
            justify-content: center;
            margin-right: 10vw;
        }
    }

    h1 {
        font-size: 3.5rem;
        text-align: center;
        margin-top: 15vh;
        margin-bottom: 2vh;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            font-size: 5rem;
            margin: 0;
        }
    }

    h2 {
        font-size: 2.2rem;
        font-family: 'Nunito-Regular';
        text-align: center;
        margin-bottom: 7vh;
        color: #3E4954;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            margin-bottom: 2vh;
            font-size: 2.5rem;
          }
    }
    
    img {
        height: auto;
        width: 80vw;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            width: 30vw;
          }
      }
`