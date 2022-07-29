import styled from "styled-components";

interface Props {
    label: String;
    value: String;
}

const StyledDiv = styled.div`
  width: 200px;
  padding: 30px;
  //border-right: 1px solid gray;
`;

const StyledH2 = styled.h2`
  margin-top: 0;
  padding-top: 0;
  font-size: 14px;
  font-weight: 700;
  color: hsl(0, 0%, 59%);
`;

const StyledP = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: hsl(0, 0%, 17%);
`;

const InfoItem = (props:Props) => {
    
    return (
    <StyledDiv>
        <StyledH2>{props.label}</StyledH2>
        <StyledP>{props.value}</StyledP>
    </StyledDiv>
    )
};

export default InfoItem;