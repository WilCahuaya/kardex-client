import { ReactNode, createContext, useState } from "react";

type themeType = {
  label: string;
  value: string;
};

type themeContextInteface = {
  theme: themeType;
  setTheme: (theme: themeType) => void;
};

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
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
