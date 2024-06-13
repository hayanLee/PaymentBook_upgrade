import { useMutation } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api/api';
import Button from '../common/Button';
import Input from '../common/Input';
import { StForm } from './Form.styled';

export default function Form() {
    const dateRef = useRef(null);
    const categoryRef = useRef(null);
    const amountRef = useRef(null);
    const contentRef = useRef(null);
    const { nickname } = useSelector((state) => state.auth);

    const { mutateAsync: AddPayment } = useMutation({
        mutationFn: (data) => api.payments.addPayment(data),
    });

    const handleSubmit = async (e) => {
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
            date,
            category,
            amount: parseInt(amount),
            content,
            createdBy: `${nickname}`,
        };

        // onSubmit(newData);
        await AddPayment(newData);
        alert('데이터가 추가됨');

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
