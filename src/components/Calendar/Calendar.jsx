import { StButton, Stwrapper } from './Calendar.styled';
export default function Calendar({ months, selectedMonth, onClickMonth }) {
    const handleClick = (e) => {
        onClickMonth(Number(e.target.value));
    };
    return (
        <Stwrapper>
            {months.map((month) => (
                <StButton
                    key={month}
                    value={month}
                    onClick={handleClick}
                    $isSelected={selectedMonth === month}
                >
                    {month} 월
                </StButton>
            ))}
        </Stwrapper>
    );
}
