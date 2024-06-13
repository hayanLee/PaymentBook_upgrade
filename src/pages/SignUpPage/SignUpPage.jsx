import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { StAuthForm } from '../../components/Form/Form.styled';
import Button from '../../components/common/Button';
import ControlledInput from '../../components/common/ControlledInput';
import { StBtnWrapper, StTitle } from '../../components/common/common.styled';
import { useInput } from '../../hooks/useInput';
import { validateSignUpInfo } from '../../utils/formValidation';

function SignUpPage() {
    const navigate = useNavigate();
    const [signUpInfo, onChangeSignUpInfo] = useInput({
        id: '',
        password: '',
        nickname: '',
    });

    const { mutateAsync: signUp } = useMutation({
        mutationFn: (data) => api.auth.signUp(data),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateSignUpInfo(signUpInfo)) return; // 유효성 검사

        try {
            await signUp(signUpInfo);
            alert('회원가입이 성공하였습니다!');
        } catch {
            alert('회원가입이 실패하였습니다.');
        }
    };
    const handleClickLoginBtn = (e) => {
        e.preventDefault();
        navigate('/login');
    };
    return (
        <>
            <StTitle>회원가입</StTitle>
            <StAuthForm onSubmit={handleSubmit}>
                <ControlledInput
                    name='id'
                    label='아이디'
                    type='text'
                    value={signUpInfo.id}
                    onChange={onChangeSignUpInfo}
                />
                <ControlledInput
                    name='password'
                    label='비밀번호'
                    type='password'
                    value={signUpInfo.password}
                    onChange={onChangeSignUpInfo}
                />
                <ControlledInput
                    name='nickname'
                    label='닉네임'
                    type='text'
                    value={signUpInfo.nickname}
                    onChange={onChangeSignUpInfo}
                />
                <StBtnWrapper>
                    <Button value='회원가입' highlight />
                    <Button value='로그인' onClick={handleClickLoginBtn} />
                </StBtnWrapper>
            </StAuthForm>
        </>
    );
}

export default SignUpPage;
