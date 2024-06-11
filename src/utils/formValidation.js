export const validateSignUpInfo = (signupInfo) => {
    const { id, pw, nickname } = signupInfo;

    if (id.length < 4 || id.length > 10) {
        alert('아이디는 4글자 이상 10글자 이하로 설정해주세요');
        return false;
    } else if (pw.length < 4 || pw.length > 15) {
        alert('비밀번호는 4글자 이상 15글자 이하로 설정해주세요');
        return false;
    } else if (nickname.length < 1 || nickname.length > 10) {
        alert('닉네임은 1글자 이상 10글자 이하로 설정해주세요');
        return false;
    } else {
        return true;
    }
};
