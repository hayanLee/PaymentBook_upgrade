import { Outlet } from 'react-router-dom';
import { StContainer } from '../Layout.styled';

export default function DefaultLayout() {
    return (
        <StContainer>
            <Outlet />
        </StContainer>
    );
}
