import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import Button from '../../components/common/Button';
import ControlledInput from '../../components/common/ControlledInput';
import { StSubTitle, StTitle } from '../../components/common/common.styled';
import { useInput } from '../../hooks/useInput';
import { StWrapper } from '../../layout/Layout.styled';
import { updateUserInfo } from '../../redux/reducers/slices/auth.slice';

function MyPage() {
    const [userInfo, onChangeUserInfo] = useInput({ nickname: '', avatar: null });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { mutateAsync: updateProfile } = useMutation({
        mutationFn: (data) => api.auth.updateProfile(data),
        onSuccess: () => {
            alert('프로필이 변경 되었습니다');
            navigate('/');
            const avatarUrl = userInfo.avatar
                ? URL.createObjectURL(userInfo.avatar)
                : null;

            dispatch(updateUserInfo({ nickname: userInfo.nickname, avatar: avatarUrl }));
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(userInfo);
    };

    return (
        <StWrapper>
            <form onSubmit={handleSubmit}>
                <StTitle>프로필 수정</StTitle>
                <StSubTitle>닉네임 변경</StSubTitle>
                <ControlledInput
                    name='nickname'
                    type='text'
                    placeholder='변경할 닉네임'
                    value={userInfo.nickname}
                    onChange={onChangeUserInfo}
                />

                <StSubTitle>프로필 이미지 변경</StSubTitle>
                <ControlledInput name='avatar' type='file' onChange={onChangeUserInfo} />
                <Button value={'프로필 업데이트'}></Button>
            </form>
        </StWrapper>
    );
}

export default MyPage;
