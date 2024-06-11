import { styled } from 'styled-components';

export const StInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`;
export const StLabel = styled.label`
    color: var(--text);
    margin-bottom: 5px;
`;
export const StInput = styled.input`
    font-size: 1rem;
    padding: 5px;
    border: none;
    border-radius: 5px;

    &:focus {
        outline: 3px solid var(--point-color);
    }
`;
export const StButton = styled.button`
    background-color: var(--point-color);
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        filter: brightness(130%);
        transform: scale(1.1);
        transition: 0.2s;
    }
`;
