import styled from "styled-components";

interface Props {
    label: String;
    value: String;
}

const StyledDiv = styled.div`
  width: 200px;
  padding: 30px;

  @media only screen and (max-width: 800px) {
    width: 300px;
    padding: 5px;
    margin: 5px;
  }
`;

const StyledH2 = styled.h2`
  margin-top: 0;
  padding-top: 0;
  font-size: 14px;
  font-weight: 700;
  color: hsl(0, 0%, 59%);

  @media only screen and (max-width: 800px) {
    text-align: center;
    padding: 5px;
    margin: 0px;
  }
`;

const StyledP = styled.p`
  font-size: 24px;
  font-weight: 700;
  
  color: hsl(0, 0%, 17%);

  @media only screen and (max-width: 800px) {
    text-align: center;
    padding: 5px;
    margin: 0px;
  }
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