import s from "./Select.module.css";
import clsx from "clsx";
import { useTheme } from "../../contexts/ThemeContext";

export type selectOption = {
  label: string;
  value: string;
};

type Props = {
  options: selectOption[];
  disabled?: boolean;
  className?: string;
};

const Select = ({ options, disabled, className = "color" }: Props) => {
  const classNames = clsx(s[className], s.caja);

  const { theme, setTheme } = useTheme();

  const setNewTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme({
      label: event.target.selectedOptions[0].text,
      value: event.target.value,
    });
  };

  return (
    <select
      className={classNames}
      disabled={disabled}
      onChange={setNewTheme}
      value={theme.value}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;
