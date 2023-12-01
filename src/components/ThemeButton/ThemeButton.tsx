import {
  IconClickLight,
  IconClickDark,
  SwitcherTheme,
} from "./ThemeButton.styled";

interface ThemeButtonProps {
  toggleTheme: () => void;
  isDarkTheme?: boolean;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({
  toggleTheme,
  isDarkTheme,
}) => {
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <SwitcherTheme onClick={handleThemeToggle}>
      {isDarkTheme ? <IconClickDark /> : <IconClickLight />}
    </SwitcherTheme>
  );
};

export default ThemeButton;
