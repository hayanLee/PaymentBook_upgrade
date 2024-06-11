import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
    const payments = useSelector((state) => state.payments.payments); // payments data

    const handleMonth = (selecteMonth) => {
        setMonth(selecteMonth);
        localStorage.setItem('selectedMonth', selecteMonth);
    };

    useEffect(() => {
        if (month !== undefined) {
            const filteredPayments = payments.filter((data) => {
                const filteredMonth = new Date(data.date).getMonth() + 1; // 선택된 달
                return month === filteredMonth;
            });
            setFilteredPayments(filteredPayments);
        }
    }, [month, payments]);

    return (
        <StWrapContainer>
            <Form />
            <Calendar months={MONTHS} selectedMonth={month} onClickMonth={handleMonth} />
            <PaymentsList filteredPayments={filteredPayments} />
        </StWrapContainer>
    );
}
