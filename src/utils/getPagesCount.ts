export const getPagesCount = (totalPages: string): number => {
    return Math.ceil(+totalPages / 1);
  };