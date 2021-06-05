import styled from 'styled-components';

export const StyledTriplecards = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        justify-content: center;
    }

    div {
        background: red;
    }
    img {
        background: red;
        height: 50px;
    }
`