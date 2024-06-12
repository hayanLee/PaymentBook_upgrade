import React from 'react';
import { Outlet } from 'react-router-dom';
import { StWrapper } from '../Layout.styled';

function AuthLayout() {
    return (
        <StWrapper>
            <Outlet />
        </StWrapper>
    );
}

export default AuthLayout;
