import styled from 'styled-components';

export const StContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--main-color);
    border-radius: 15px;
    box-shadow: 10px 10px 20px -7px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 20px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 20px -7px rgba(0, 0, 0, 0.75);
    overflow: hidden;
`;

export const StWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 30px;
`;
