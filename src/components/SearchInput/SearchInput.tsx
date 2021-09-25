import SearchRounded from "@material-ui/icons/SearchRounded";

import styles from "./SearchInput.module.css";

interface Props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput = ({ placeholder, onChange }: Props) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded />
      <input
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
