import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import api from '../../api/api';
import Calendar from '../../components/Calendar';
import Form from '../../components/Form';
import PaymentList from '../../components/PaymentList';
import { StWrapContainer } from './HomePage.styled';
const MONTHS = Array(12)
    .fill(0)
    .map((_, idx) => idx + 1);

export default function HomePage() {
    const initalMonth = parseInt(localStorage.getItem('selectedMonth')) || 1;
    const [month, setMonth] = useState(initalMonth); // 선택된 달

    const {
        data: payments,
        isPending,
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

    if (isPending) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading payments</div>;
    }

    return (
        <StWrapContainer>
            <Form />
            <Calendar months={MONTHS} selectedMonth={month} onClickMonth={handleMonth} />
            <PaymentList filteredPayments={filteredPayments} />
        </StWrapContainer>
    );
}
