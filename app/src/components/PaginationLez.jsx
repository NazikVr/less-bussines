import React from 'react';
import { PaginationControl } from 'react-bootstrap-pagination-control';

const PaginationLez = ({currentPage, total, changePage}) => {

  return <PaginationControl
    page={currentPage}
    between={3}
    total={total*10}
    limit={10}
    changePage={changePage}
    ellipsis={1}
  />
}

export default PaginationLez