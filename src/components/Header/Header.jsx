import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUserInfo } from '../../redux/reducers/slices/auth.slice';
import Button from '../common/Button';
import { Nickname, StAvatar, StHeader, StLink, StWrapper } from './Header.styled';

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogOutBtnClick = () => {
        localStorage.clear();
        dispatch(clearUserInfo());
        navigate('/login');
    };

    const { nickname, avatar } = useSelector((state) => state.auth);
    return (
        <StHeader>
            <StWrapper>
                <StLink to='/'>HOME</StLink>
                <StLink to='/mypage'>내 프로필</StLink>
            </StWrapper>
            <StWrapper>
                <Nickname>{nickname}</Nickname>
                <StAvatar $avatar={avatar} />
                <Button value={'로그아웃'} onClick={handleLogOutBtnClick} />
            </StWrapper>
        </StHeader>
    );
}

export default Header;
