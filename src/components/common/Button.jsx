import { StButton } from './common.styled';

export default function Button({ value, onClick }) {
    return <StButton onClick={onClick}>{value}</StButton>;
}
