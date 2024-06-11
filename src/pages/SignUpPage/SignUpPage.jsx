import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StAuthForm } from '../../components/Form/Form.styled';
import Button from '../../components/common/Button';
import ControlledInput from '../../components/common/ControlledInput';
import { StBtnWrapper, StTitle } from '../../components/common/common.styled';
import { useInput } from '../../hooks/useInput';
import { validateSignUpInfo } from '../../utils/formValidation';

function SignUpPage() {
    const navigate = useNavigate();
    const [signUpInfo, onChangeSignUpInfo] = useInput({ id: '', pw: '', nickname: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateSignUpInfo(signUpInfo)) return; // 유효성 검사

        console.log(signUpInfo); // dispatch 보내기
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
                    name='pw'
                    label='비밀번호'
                    type='password'
                    value={signUpInfo.pw}
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
