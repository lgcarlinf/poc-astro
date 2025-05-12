export const pathWithBase = (path: string) => {
  const base = import.meta.env.BASE_URL;
  return base + path;
};
