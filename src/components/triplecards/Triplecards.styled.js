import styled from 'styled-components';

export const StyledTriplecards = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        justify-content: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        height: 80vh;
        margin: 10px;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            height: 60vh;
        }
    }

    img {
        height: 50%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            height: 50%;
        }
    }

    p {
        font-size: 3.5vh;
        text-align: center;
        width: 80%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            width: 60%;
        }
    }
`