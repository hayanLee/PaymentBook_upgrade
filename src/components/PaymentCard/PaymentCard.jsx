import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { StAmount, StCard, StPerson, StSpanWrapper } from './PaymentCard.styled';

export default function PaymentCard({ payment }) {
    const navigate = useNavigate();
    const { id, date, amount, content, createdBy } = payment;
    const handleClick = () => {
        navigate(`/payment/${id}`);
    };
    const { nickname } = useSelector((state) => state.auth);
    return (
        <StCard>
            <StSpanWrapper onClick={handleClick}>
                <span>{date}</span>
                <span>
                    {content} |<StPerson>{createdBy}</StPerson>
                </span>
            </StSpanWrapper>
            <StAmount>{amount} ₩</StAmount>
        </StCard>
    );
}
