import styled from "styled-components";

const StyledInput = styled.input`
  width: 460px;
  height: 15px;
  padding: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-style: none;
  background-color: white;

  font-size: 18px;
  font-weight: 400;
  color: gray;

  @media only screen and (max-width: 800px) {
    width: 230px;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus {
    color: black;
    border-style: none;
    outline: none;
  }
`;

interface Props {
  name: String;
  type: String;
  value: String;
  placeholder: String;
  onChange: Function;
}

const Input = (props: Props) => {
  return (
    <StyledInput
      id={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export default Input;
