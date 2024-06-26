import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../api/api';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { StButtons, StWrapContainer } from './PaymentDetailPage.styled';

export default function PaymentDetailPage() {
    const { paymentId } = useParams();
    const navigate = useNavigate(); // 뒤로가기
    const { userId } = useSelector((state) => state.auth);
    const queryClient = useQueryClient();

    const {
        data: payment,
        isError,
        isPending,
    } = useQuery({
        queryKey: ['payment', paymentId],
        queryFn: () => api.payments.getPayment(paymentId),
    });

    const { mutateAsync: updatePayment } = useMutation({
        mutationFn: (data) => api.payments.updatePayment(data),
        onSuccess: () => {
            alert('수정되었습니다');
            queryClient.invalidateQueries(['payment', paymentId]);
            navigate('/');
        },
    });

    const { mutateAsync: deletePayment } = useMutation({
        mutationFn: (paymentId) => api.payments.deletePayment(paymentId),
        onSuccess: () => {
            alert('삭제되었습니다');
            navigate('/');
        },
    });

    // 변경된 payment 저장
    const dateRef = useRef(null);
    const categoryRef = useRef(null);
    const amountRef = useRef(null);
    const contentRef = useRef(null);

    const handleSave = async () => {
        const date = dateRef.current.value;
        const category = categoryRef.current.value;
        const amount = amountRef.current.value;
        const content = contentRef.current.value;

        if (userId !== payment.createdBy) {
            alert(`${userId} 님이 작성하신 글이 아닙니다`);
            return;
        }

        if (!date || !category || !amount || !content) {
            alert('모든 필드를 작성해주세요.');
            return;
        }

        const modifiedPayment = {
            paymentId,
            date,
            category,
            amount,
            content,
            createdBy: userId,
        };

        await updatePayment(modifiedPayment);
    };

    const handleDelete = async () => {
        if (confirm('해당 지출 항목을 삭제하시겠습니까?')) {
            await deletePayment(paymentId);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading payments</div>;
    }

    return (
        <StWrapContainer>
            <Input ref={dateRef} label='날짜' type='date' defaultValue={payment.date} />
            <Input
                ref={categoryRef}
                label='분류'
                type='text'
                defaultValue={payment.category}
            />
            <Input
                ref={amountRef}
                label='금액'
                type='number'
                defaultValue={payment.amount}
            />
            <Input
                ref={contentRef}
                label='내용'
                type='text'
                defaultValue={payment.content}
            />

            <StButtons>
                {userId === payment.createdBy && (
                    <>
                        <Button value='수정' onClick={handleSave} />
                        <Button value='삭제' onClick={handleDelete} />
                    </>
                )}
                <Button value='뒤로 가기' onClick={handleBack} />
            </StButtons>
        </StWrapContainer>
    );
}
