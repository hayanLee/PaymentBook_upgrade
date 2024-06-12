import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 8px;
    background-color: var(--main-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StLink = styled(Link)`
    text-decoration: none;
    font-weight: bold;
    color: var(--text);
    margin-right: 10px;

    &:hover {
        text-decoration: underline;
    }
`;
