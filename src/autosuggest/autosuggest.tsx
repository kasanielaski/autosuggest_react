import { ChangeEvent, useState } from "react";
import { useDebounce } from "react-use";

import type { IAutosuggestProps } from "./types.d.ts";
import { suggestList } from "../assets/suggest-list.ts";

import {
  Input,
  Title,
  Wrapper,
  SuggestContainer,
  SuggestList,
  SuggestItem,
} from "./styled.ts";

const Autosuggest = ({
  placeholder = "placeholder",
  title = "default title",
}: IAutosuggestProps) => {
  const [text, setText] = useState<string>("");
  const [suggests, setSuggests] = useState<string[]>(() => []);

  useDebounce(
    () => {
      if (text.length > 0) {
        const suggests = suggestList.filter((el) => el.match(text));
        setSuggests(suggests);
      } else {
        setSuggests([]);
      }
    },
    500,
    [text]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleElement = (event: any) => {
    setText(event.target.outerText);
  }

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input placeholder={placeholder} value={text} onChange={handleChange} />
      {suggests.length > 0 && (
        <SuggestContainer>
          <SuggestList>
            {suggests.map((el, i) => (
              <SuggestItem key={i} onClick={handleElement}>{el}</SuggestItem>
            ))}
          </SuggestList>
        </SuggestContainer>
      )}
    </Wrapper>
  );
};

export default Autosuggest;
