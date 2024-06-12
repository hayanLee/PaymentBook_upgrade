import React from 'react';
import Button from '../../components/common/Button';
import ControlledInput from '../../components/common/ControlledInput';
import { StSubTitle, StTitle } from '../../components/common/common.styled';
import { useInput } from '../../hooks/useInput';
import { StWrapper } from '../../layout/Layout.styled';

function MyPage() {
    const [value, onChangeInfo] = useInput({ nickname: '', profileImg: '' });
    return (
        <StWrapper>
            <StTitle>프로필 수정</StTitle>
            <StSubTitle>닉네임 변경</StSubTitle>
            <ControlledInput type='text' placeholder='닉네임' />

            <StSubTitle>프로필 이미지 변경</StSubTitle>
            <ControlledInput type='file' placeholder='닉네임' />
            <Button value={'프로필 업데이트'}></Button>
        </StWrapper>
    );
}

export default MyPage;
