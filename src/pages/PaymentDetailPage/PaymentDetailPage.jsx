import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { deletePayment, updatePayment } from '../../redux/reducers/slices/payment.slice';
import { StButtons, StWrapContainer } from './PaymentDetailPage.styled';

export default function PaymentDetailPage() {
    const { paymentId } = useParams();
    const navigate = useNavigate(); // 뒤로가기

    const dispatch = useDispatch();
    const payments = useSelector((state) => state.payments.payments);

    const targetPayment = payments.find((data) => data.id === paymentId); // 대상

    // 변경된 payment 저장
    const dateRef = useRef(null);
    const categoryRef = useRef(null);
    const amountRef = useRef(null);
    const contentRef = useRef(null);

    const handleSave = () => {
        const date = dateRef.current.value;
        const category = categoryRef.current.value;
        const amount = amountRef.current.value;
        const content = contentRef.current.value;

        if (!date || !category || !amount || !content) {
            alert('모든 필드를 작성해주세요.');
            return;
        }

        const modifiedPayment = {
            id: targetPayment.id,
            date,
            category,
            amount,
            content,
        };

        dispatch(updatePayment(modifiedPayment));
        navigate(-1);
    };

    const handleDelete = () => {
        if (confirm('해당 지출 항목을 삭제하시겠습니까?')) {
            dispatch(deletePayment(targetPayment));
            navigate(-1);
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (!targetPayment) return null;

    return (
        <StWrapContainer>
            <Input
                ref={dateRef}
                label='날짜'
                type='date'
                defaultValue={targetPayment.date}
            />
            <Input
                ref={categoryRef}
                label='분류'
                type='text'
                defaultValue={targetPayment.category}
            />
            <Input
                ref={amountRef}
                label='금액'
                type='number'
                defaultValue={targetPayment.amount}
            />
            <Input
                ref={contentRef}
                label='내용'
                type='text'
                defaultValue={targetPayment.content}
            />

            <StButtons>
                <Button value='수정' onClick={handleSave} />
                <Button value='삭제' onClick={handleDelete} />
                <Button value='뒤로 가기' onClick={handleBack} />
            </StButtons>
        </StWrapContainer>
    );
}
