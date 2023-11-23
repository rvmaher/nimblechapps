import React from 'react';

type Props = {
  currPage: number;
  pagesPerBatch: number;
  totalPages: number;
};

export const usePagination = ({currPage, totalPages, pagesPerBatch}: Props) => {
  const pagination = React.useMemo(() => {
    let startPage = Math.max(1, currPage - Math.floor(pagesPerBatch / 2));
    let endPage = Math.min(totalPages, startPage + pagesPerBatch - 1);
    startPage = Math.max(1, endPage - pagesPerBatch + 1);
    return Array.from(
      {length: endPage - startPage + 1},
      (_, i) => startPage + i,
    );
  }, [currPage, totalPages, pagesPerBatch]);

  return pagination;
};
