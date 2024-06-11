import { forwardRef, useId } from 'react';
import { StInput, StInputWrapper, StLabel } from './common.styled';

const Input = forwardRef(({ label, type, defaultValue }, ref) => {
    const id = useId();
    return (
        <StInputWrapper>
            {label && <StLabel htmlFor={id}>{label}</StLabel>}
            <StInput
                id={id}
                type={type}
                defaultValue={defaultValue}
                min={type === 'number' ? 0 : ''}
                ref={ref}
            />
        </StInputWrapper>
    );
});

export default Input;
