import PaymentCard from '../PaymentCard';
import { StListWrapper, StUlist } from './PaymentList.styled';

// id, date,category,amount,content
export default function PaymentList({ filteredPayments }) {
    return (
        <StListWrapper>
            <StUlist>
                {filteredPayments.map((payment) => (
                    <PaymentCard key={payment.id} payment={payment} />
                ))}
            </StUlist>
        </StListWrapper>
    );
}
