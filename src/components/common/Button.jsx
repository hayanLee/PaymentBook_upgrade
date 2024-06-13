import { StButton } from './common.styled';

export default function Button({ value, onClick, highlight }) {
    return (
        <StButton onClick={onClick} $highlight={highlight ? 'yellow' : 'pink'}>
            {value}
        </StButton>
    );
}
