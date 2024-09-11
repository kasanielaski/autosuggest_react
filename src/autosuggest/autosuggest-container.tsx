import { SuggestContainer, SuggestList, SuggestItem } from "./styled";
import { IAutosuggestContainerProps } from "./types";

export const AutosuggestContainer = ({
  suggests = [],
  setText,
}: IAutosuggestContainerProps) => {
  const handleElement = (event: any) => {
    setText(event.target.outerText);
  };

  return (
    <SuggestContainer>
      <SuggestList>
        {suggests.map((el, i) => (
          <SuggestItem key={i} onClick={handleElement}>
            {el}
          </SuggestItem>
        ))}
      </SuggestList>
    </SuggestContainer>
  );
};
