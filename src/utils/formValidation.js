export const validateSignUpInfo = (signupInfo) => {
    const { id, password, nickname } = signupInfo;

    if (id.length < 4 || id.length > 10) {
        alert('아이디는 4글자 이상 10글자 이하로 설정해주세요');
        return false;
    }
    if (password.length < 4 || password.length > 15) {
        alert('비밀번호는 4글자 이상 15글자 이하로 설정해주세요');
        return false;
    }
    if (nickname.length < 1 || nickname.length > 10) {
        alert('닉네임은 1글자 이상 10글자 이하로 설정해주세요');
        return false;
    }
    return true;
};
