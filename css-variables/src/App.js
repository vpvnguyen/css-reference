import {
  usePrimaryTheme,
  useSecondaryTheme,
  ThemeButton,
  theme,
} from "./theme";

const Text = ({ children, color, bgColor }) => {
  const style = {
    color,
    backgroundColor: bgColor,
  };
  return <div style={style}>{children}</div>;
};

function App() {
  const { primaryTheme, setPrimaryTheme, nextPrimaryTheme } = usePrimaryTheme();
  const { secondaryTheme, setSecondaryTheme, nextSecondaryTheme } =
    useSecondaryTheme();

  const primaryColor = theme.palette.primary.color;
  const primaryBgColor = theme.palette.primary.background;
  const secondaryColor = theme.palette.secondary.color;
  const secondaryBgColor = theme.palette.secondary.background;

  return (
    <div>
      <Text color={primaryColor} bgColor={primaryBgColor}>
        This text is the {primaryTheme} color
      </Text>
      <ThemeButton
        onClick={() => setPrimaryTheme(nextPrimaryTheme)}
        nextTheme={nextPrimaryTheme}
      />

      <Text color={secondaryColor} bgColor={secondaryBgColor}>
        This text is the {secondaryTheme} color
      </Text>

      <ThemeButton
        onClick={() => setSecondaryTheme(nextSecondaryTheme)}
        nextTheme={nextSecondaryTheme}
      />
    </div>
  );
}

export default App;
