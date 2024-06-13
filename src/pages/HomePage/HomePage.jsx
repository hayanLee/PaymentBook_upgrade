import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
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

    const [filteredPayments, setFilteredPayments] = useState([]);

    const {
        data: payments,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['payment', { list: true }],
        queryFn: () => api.payments.getPayments(),
    });

    console.log(payments);

    // const payments = useSelector((state) => state.payments.payments); // payments data

    const handleMonth = (selecteMonth) => {
        setMonth(selecteMonth);
        localStorage.setItem('selectedMonth', selecteMonth);
    };

    useEffect(() => {
        if (payments) {
            const filtered = payments.filter((payment) => {
                const paymentMonth = new Date(payment.date).getMonth() + 1;
                return month === paymentMonth;
            });
            setFilteredPayments(filtered);
        }
    }, [month, payments]);

    console.log('>>>>>>', filteredPayments);

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
