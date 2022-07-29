import styled from "styled-components";

const StyledButton = styled.button`
  width: 55px;
  height: 55px;
  padding: 11px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-style: none;
  background-color: black;
  &:hover {
    background-color: #333333;
    cursor: pointer;
  }
`;

const Button = () => {
    return (
    <StyledButton>
        <img src="/assets/images/icon-arrow.svg" />
    </StyledButton>
  );
};

export default Button;
