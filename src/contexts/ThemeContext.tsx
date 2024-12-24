import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type themeType = {
  label: string;
  value: string;
};

interface themeContextInteface {
  theme: themeType;
  setTheme: (theme: themeType) => void;
}

export const ThemeContext = createContext<themeContextInteface | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<themeType>({
    label: "claro",
    value: "light",
  });

  useEffect(() => {
    // Actualiza el atributo `data-theme` en el HTML cada vez que cambia el tema
    document.documentElement.setAttribute("data-theme", theme.value);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeContext no encontrado");
  }

  return themeContext;
};
