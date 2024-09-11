export interface IAutosuggestProps {
  title?: string;
  placeholder?: string;
  autocompleteList?: string[];
}

export interface IAutosuggestContainerProps {
  suggests?: string[];
  setText: (e) => void;
}