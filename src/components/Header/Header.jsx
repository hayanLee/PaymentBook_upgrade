import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUserInfo } from '../../redux/reducers/slices/auth.slice';
import Button from '../common/Button';
import { StHeader, StLink } from './Header.styled';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        localStorage.clear();
        dispatch(clearUserInfo());
        navigate('/login');
    };
    return (
        <StHeader>
            <div>
                <StLink to='/'>HOME</StLink>
                <StLink to='/mypage'>내 프로필</StLink>
            </div>
            <div>
                <span>이미지</span>
                <span>닉네임</span>
                <Button value={'로그아웃'} onClick={handleClick} />
            </div>
        </StHeader>
    );
}

export default Header;
