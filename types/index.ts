export type ThemeName = "light" | "dark" | "yellow" | "purple";
export type ThemeTitle = Capitalize<ThemeName>;

export interface ITheme {
  title: ThemeTitle;
  name: ThemeName;
  emoji: React.ReactNode;
}
