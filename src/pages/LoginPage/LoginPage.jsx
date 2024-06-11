import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StAuthForm } from '../../components/Form/Form.styled';
import Button from '../../components/common/Button';
import ControlledInput from '../../components/common/ControlledInput';
import { StBtnWrapper, StTitle } from '../../components/common/common.styled';
import { useInput } from '../../hooks/useInput';

function LoginPage() {
    const navigate = useNavigate();
    const [loginInfo, onChangeLoginInfo] = useInput({ id: '', pw: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(1);
    };
    const handleClickSignUpBtn = (e) => {
        e.preventDefault();
        navigate('/sign-up');
    };
    return (
        <>
            <StTitle>로그인</StTitle>
            <StAuthForm onSubmit={handleSubmit}>
                <ControlledInput
                    name='id'
                    label='아이디'
                    type='text'
                    value={loginInfo.id}
                    onChange={onChangeLoginInfo}
                />
                <ControlledInput
                    name='pw'
                    label='비밀번호'
                    type='password'
                    value={loginInfo.pw}
                    onChange={onChangeLoginInfo}
                />
                <StBtnWrapper>
                    <Button value='로그인' highlight />
                    <Button value='회원가입' onClick={handleClickSignUpBtn} />
                </StBtnWrapper>
            </StAuthForm>
        </>
    );
}

export default LoginPage;
