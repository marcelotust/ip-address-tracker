import styled from "styled-components";

const StyledCard = styled.div`
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    background-color: white;
`;

interface Props {
    children: React.ReactNode
}

const Card = (props:Props) => {
    return <StyledCard>{props.children}</StyledCard>;
};

export default Card;