import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import api from '../../api/api';
import Calendar from '../../components/Calendar';
import Form from '../../components/Form';
import PaymentsList from '../../components/PaymentsList';
import { StWrapContainer } from './HomePage.styled';
const MONTHS = Array(12)
    .fill(0)
    .map((_, idx) => idx + 1);

export default function HomePage() {
    const initalMonth = parseInt(localStorage.getItem('selectedMonth')) || 1;
    const [month, setMonth] = useState(initalMonth); // 선택된 달

    const {
        data: payments,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['payment', { list: true }],
        queryFn: () => api.payments.getPayments(),
    });

    const handleMonth = (selecteMonth) => {
        setMonth(selecteMonth);
        localStorage.setItem('selectedMonth', selecteMonth);
    };

    const filteredPayments = useMemo(() => {
        if (!payments) return [];
        return payments.filter((payment) => {
            const paymentMonth = new Date(payment.date).getMonth() + 1;
            return month === paymentMonth;
        });
    }, [month, payments]);

    console.log('필터링된 결과', filteredPayments);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading payments</div>;
    }

    return (
        <StWrapContainer>
            <Form />
            <Calendar months={MONTHS} selectedMonth={month} onClickMonth={handleMonth} />
            <PaymentsList filteredPayments={filteredPayments} />
        </StWrapContainer>
    );
}
