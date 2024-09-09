import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20%;
  margin: 8px;
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-size: larger;
  font-weight: bolder;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
`;

export const SuggestContainer = styled.div`
  margin-top: 8px;
  min-width: 100px;
  width: auto;
  height: auto;
  border: 1px solid #c3c3c3;
  border-radius: 4px;
`;

export const SuggestList = styled.ul`
  margin: 8px 0;
  padding: 0;
`;

export const SuggestItem = styled.li`
  padding: 8px;
  list-style: none;
  cursor: pointer;

  &:hover {
    background-color: #c3c3c3;
  }
`;
