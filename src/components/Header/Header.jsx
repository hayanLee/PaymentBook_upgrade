import React from 'react';
import Button from '../common/Button';
import { StHeader, StLink } from './Header.styled';

function Header() {
    return (
        <StHeader>
            <div>
                <StLink to='/'>HOME</StLink>
                <StLink to='/mypage'>내 프로필</StLink>
            </div>
            <div>
                <span>이미지</span>
                <span>닉네임</span>
                <Button value={'로그아웃'} />
            </div>
        </StHeader>
    );
}

export default Header;
