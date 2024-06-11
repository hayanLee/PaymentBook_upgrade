import styled from 'styled-components';

export const Stwrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(6, minmax(20px, 1fr));
    grid-template-rows: repeat(2, auto);
    gap: 15px;
    padding: 0 10px;
    margin: 10px 0;
`;

export const StButton = styled.button`
    width: 100%;
    background-color: ${(props) =>
        props.$isSelected ? 'var(--point-color)' : 'var(--second-color)'};
    border: none;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    &:hover {
        background-color: var(--point-color);
        transition: 0.2s;
        transform: scale(1.05);
    }
`;
