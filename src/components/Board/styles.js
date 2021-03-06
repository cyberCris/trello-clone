import styled, { css } from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  width: 100vw;

  ${(props) =>
    props.isLoading &&
    css`
      padding: 0;
      height: 100vh;
      align-items: center;
      justify-content: center;
    `}
`;

export const BoardHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  h1 {
    color: #707070;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 14px;
  }
`;

export const Search = styled.div`
  display: flex;

  form {
    width: 520px;
    margin-right: 30px;
    input {
      padding: 6px 12px 8px;
      border: 1px solid #dadde2;
      border-radius: 3px;
      color: #000;
      width: 100%;
      font-size: 16px;

      &::placeholder {
        font-family: 'Roboto', sans-serif;
        font-style: italic;
        font-weight: 400;
        color: #9ca3ab;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 164px;
  padding: 0 10px;
  background: #e4e6eb;
  border: 0;
  border-radius: 3px;
  font-size: 13px;
  color: #566780;

  img {
    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #566780;
  }

  .rotate {
    transform: rotateZ(180deg);
  }
`;

export const Dropdown = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const LeftSection = styled.div`
  display: flex;
  margin-right: 20px;
  border-right: 1px solid #eee;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  p {
    color: ${(props) => (props.isSelected ? '#2680EB' : '#566780')};
    font-size: 13px;
  }
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: #eff5fb;
  margin-right: 8px;
  color: #2680eb;
  font-size: 13px;
  border: ${(props) => (props.isSelected ? '1px solid #2680eb' : 0)};
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;

  div {
    height: 100%;
    border-radius: 3px;
    background: #0000000a;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      color: #818181;
      font-size: 12px;
    }
  }
`;

export const Actions = styled.div`
  button {
    padding: 8px;
    background: #5aac44;
    border: 0;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    margin-right: 10px;

    &:hover {
      background: ${lighten(0.1, '#5aac44')};
    }

    &:active {
      background: ${darken(0.1, '#5aac44')};
    }
  }
`;

export const TagButton = styled.button`
  margin-right: 10px;
  width: 70px;
  height: 24px;
  border-radius: 3px;
  border: 0;
  background: transparent;
  cursor: pointer;

  border: ${(props) => (props.isSelected ? '1px solid #2680eb' : 0)};
`;

export const BoardColumns = styled.div`
  display: flex;
`;

export const FormCol = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 10px;
  width: 344px;
  height: 52px;
  padding: 0 14px;
  background: #e4e6eb;

  input {
    border: 0;
    font-size: 16px;
    background: transparent;
    color: #707070;
    font-family: 'Roboto', sans-serif;
  }
`;

export const ButtonAdd = styled.button`
  margin-left: 10px;
  width: 344px;
  height: 52px;
  border: 2px dashed #b8b8b8;
  padding: 14px 10px;
  background: transparent;
  color: #979797;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    margin-right: 4px;
  }
`;
