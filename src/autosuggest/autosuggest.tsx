import { ChangeEvent, useState } from "react";
import { useDebounce } from "react-use";

import type { IAutosuggestProps } from "./types";
import { suggestList } from "../assets/suggest-list";

import { Input, Title, Wrapper } from "./styled";
import { AutosuggestContainer } from "./autosuggest-container";

const Autosuggest = ({
  placeholder = "placeholder",
  title = "default title",
  autocompleteList = suggestList,
}: IAutosuggestProps) => {
  const [text, setText] = useState<string>("");
  const [suggests, setSuggests] = useState<string[]>(() => []);

  useDebounce(
    () => {
      if (text.length > 0) {
        const suggests = autocompleteList.filter((el) => el.match(text));
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

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input placeholder={placeholder} value={text} onChange={handleChange} />
      {suggests.length > 0 && <AutosuggestContainer suggests={suggests} setText={setText} />}
    </Wrapper>
  );
};

export default Autosuggest;
