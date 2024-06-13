import { useId } from 'react';
import { StInput, StInputWrapper, StLabel } from './common.styled';

function ControlledInput({ name, label, type, value, onChange, placeholder }) {
    const id = useId();
    return (
        <StInputWrapper>
            {label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                accept={type === 'file' ? 'image/png, image/jpeg' : ''}
                autoComplete='on'
            />
        </StInputWrapper>
    );
}

export default ControlledInput;
