import { useContext } from "react";
import s from "./Select.module.css";
import clsx from "clsx";
import { ThemeContext } from "../../contexts/ThemeContext";

export type selectOption = {
  label: string;
  value: string;
};

type Props = {
  disabled?: boolean;
  className?: string;
};

const options: selectOption[] = [
  { label: "claro", value: "light" },
  { label: "oscuro", value: "dark" },
  { label: "verde", value: "green" },
];

const Select = ({ disabled, className = "color" }: Props) => {
  const classNames = clsx(s[className], s.caja);

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Theme debe usarse dentro de un ThemeProvider");
  }

  const setNewTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    themeContext.newSetTheme(
      event.target.selectedOptions[0].innerText,
      event.target.value
    );
  };

  return (
    <select
      className={classNames}
      disabled={disabled}
      onChange={setNewTheme}
      value={themeContext.value}
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
