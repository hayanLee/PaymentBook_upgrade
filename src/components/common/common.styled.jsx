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
    width: 100%;

    &:focus {
        outline: 3px solid var(--point-color);
    }
`;

export const StBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 10px;
`;

export const StButton = styled.button`
    background-color: ${({ $highlight }) =>
        $highlight === 'yellow' ? 'var(--second-color)' : 'var(--point-color)'};
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.03);
        transition: 0.2s;
    }
`;

export const StTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const StSubTitle = styled(StTitle)`
    font-size: 1rem;
`;
