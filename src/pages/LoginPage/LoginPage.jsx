import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { StAuthForm } from '../../components/Form/Form.styled';
import Button from '../../components/common/Button';
import ControlledInput from '../../components/common/ControlledInput';
import { StBtnWrapper, StTitle } from '../../components/common/common.styled';
import { useInput } from '../../hooks/useInput';
import { setUserInfo } from '../../redux/reducers/slices/auth.slice';

function LoginPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginInfo, onChangeLoginInfo] = useInput({ id: '', password: '' });

    const { mutateAsync: logIn } = useMutation({
        mutationFn: (data) => api.auth.logIn(data),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { userId, nickname, avatar } = await logIn(loginInfo);
            dispatch(setUserInfo({ userId, nickname, avatar }));
            alert('로그인 성공하였습니다');

            navigate('/');
        } catch {
            alert('로그인이 실패하였습니다');
        }
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
                    name='password'
                    label='비밀번호'
                    type='password'
                    value={loginInfo.password}
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
