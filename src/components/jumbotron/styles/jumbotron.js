import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};

    @media (max-width: 1000px){
        flex-direction: column;
    }
`;