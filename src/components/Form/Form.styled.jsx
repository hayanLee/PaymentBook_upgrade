import styled from 'styled-components';

export const StForm = styled.form`
    display: grid;
    grid-template-columns: repeat(4, minmax(100px, 1fr)) auto;
    gap: 20px;
    padding: 5px 15px;
    justify-content: space-around;
    align-items: center;
    /* background-color: var(--first-color); */
    border-radius: 10px;
`;
