import styled from 'styled-components';

export const StCard = styled.div`
    width: 95%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: space-between;
    border-radius: 10px;
    background-color: var(--first-color);
    padding: 10px;
    margin: 20px auto;
    color: var(--text);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.53);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.53);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.53);
    cursor: pointer;
    &:hover {
        transition: 0.2s;
        transform: scale(1.02);
    }
`;
export const StSpanWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    & > :nth-child(2) {
        color: var(--text);
        font-weight: bold;
    }
    & > :last-child {
        line-height: 1.5;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
export const StAmount = styled.span`
    flex-shrink: 0;
    align-self: center;
    font-weight: bold;
    color: var(--point-color);
`;
export const StPerson = styled.span`
    color: var(--point-color);
    margin-left: 5px;
`;
