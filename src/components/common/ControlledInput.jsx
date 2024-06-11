import { useId } from 'react';
import { StInput, StInputWrapper, StLabel } from './common.styled';

function ControlledInput({ name, label, type, value, onChange }) {
    const id = useId();
    return (
        <StInputWrapper>
            {label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput id={id} name={name} type={type} value={value} onChange={onChange} />
        </StInputWrapper>
    );
}

export default ControlledInput;
