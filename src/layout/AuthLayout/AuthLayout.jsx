import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`;

function AuthLayout() {
    return (
        <StWrapper>
            <Outlet />
        </StWrapper>
    );
}

export default AuthLayout;
