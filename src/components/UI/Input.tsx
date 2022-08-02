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
  onChange: Function;
  onFocus: Function;
}

//export type Ref = HTMLInputElement;

//const Input = React.forwardRef<Ref, Props>((props, ref) => {
const Input = (props: Props) => {
  return (
    <StyledInput
      id={props.name}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      //ref={ref}
    />
  );
};

export default Input;
