import { useTheme } from "../../contexts/ThemeContext";

function Button() {
  const { theme } = useTheme();
  return <div>{theme.value}</div>;
}

export default Button;
