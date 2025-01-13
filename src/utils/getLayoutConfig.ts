export const getLayoutConfig = <T extends { url: string }>(
  menu: T[],
  path: string
) => menu.find((menuItem) => path.startsWith(menuItem.url));
