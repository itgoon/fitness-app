export const getLayoutConfig = <T extends { url: string; children?: T[] }>(
  menu: T[],
  path: string
): T | undefined => {
  for (let i = 0; i < menu.length; i += 1) {
    const item = menu[i];

    if (item.children) {
      const config = getLayoutConfig(item.children, path);

      return config;
    }

    if (!item.children && path.startsWith(item.url)) {
      return item;
    }
  }

  return undefined;
};
