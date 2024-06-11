import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPayment } from '../../redux/reducers/slices/payment.slice';
import Button from '../common/Button';
import Input from '../common/Input';
import { StForm } from './Form.styled';

export default function Form() {
    const dateRef = useRef(null);
    const categoryRef = useRef(null);
    const amountRef = useRef(null);
    const contentRef = useRef(null);

    const dispatch = useDispatch();
    const onSubmit = (newData) => dispatch(addPayment(newData));

    const handleSubmit = (e) => {
        e.preventDefault();

        const date = dateRef.current.value;
        const category = categoryRef.current.value;
        const amount = amountRef.current.value;
        const content = contentRef.current.value;

        if (!date || !category || !amount || !content) {
            alert('모든 필드를 작성해주세요.');
            return;
        }

        const newData = {
            id: uuidv4(),
            date,
            category,
            amount: parseInt(amount),
            content,
        };

        onSubmit(newData);
        resetForm();
    };

    const resetForm = () => {
        dateRef.current.value = '';
        categoryRef.current.value = '';
        amountRef.current.value = 0;
        contentRef.current.value = '';
    };

    return (
        <StForm onSubmit={handleSubmit}>
            <Input ref={dateRef} label='날짜' id='date' type='date' defaultValue='' />
            <Input
                ref={categoryRef}
                label='분류'
                id='category'
                type='text'
                defaultValue=''
            />
            <Input
                ref={amountRef}
                label='금액'
                id='amount'
                type='number'
                defaultValue={0}
            />
            <Input
                ref={contentRef}
                label='내용'
                id='content'
                type='text'
                defaultValue=''
            />
            <Button value='SAVE' />
        </StForm>
    );
}
