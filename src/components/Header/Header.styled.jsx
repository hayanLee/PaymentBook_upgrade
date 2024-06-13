import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 8px 20px;
    background-color: var(--main-color);

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
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

export const StAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${({ $avatar }) => ($avatar ? 'none' : 'var(--second-color)')};
    background-image: url(${({ $avatar }) => $avatar || 'none'});
    background-size: cover;
    background-position: center;
    display: inline-block;
`;

export const Nickname = styled.span`
    font-weight: bold;
`;
