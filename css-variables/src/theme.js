import { useState, useEffect } from "react";

export const theme = {
  palette: {
    primary: {
      color: "var(--primary-color)",
      background: "var(--primary-bg-color)",
    },
    secondary: {
      color: "var(--secondary-color)",
      background: "var(--secondary-bg-color)",
    },
  },
};

export const usePrimaryTheme = () => {
  const [primaryTheme, setPrimaryTheme] = useState("primary-light");
  const nextPrimaryTheme =
    primaryTheme === "primary-light" ? "primary-dark" : "primary-light";

  useEffect(() => {
    document.body.dataset.primaryTheme = primaryTheme;
    document.body.dataset.nextPrimaryTheme = nextPrimaryTheme;
  }, [primaryTheme, nextPrimaryTheme]);

  return { primaryTheme, setPrimaryTheme, nextPrimaryTheme };
};

export const useSecondaryTheme = () => {
  const [secondaryTheme, setSecondaryTheme] = useState("secondary-light");
  const nextSecondaryTheme =
    secondaryTheme === "secondary-light" ? "secondary-dark" : "secondary-light";

  useEffect(() => {
    document.body.dataset.secondaryTheme = secondaryTheme;
    document.body.dataset.nextSecondaryTheme = nextSecondaryTheme;
  }, [secondaryTheme, nextSecondaryTheme]);

  return { secondaryTheme, setSecondaryTheme, nextSecondaryTheme };
};

export const ThemeButton = ({ onClick, nextTheme }) => {
  return (
    <button onClick={onClick}>
      Switch to <p>{nextTheme}</p> mode
    </button>
  );
};
