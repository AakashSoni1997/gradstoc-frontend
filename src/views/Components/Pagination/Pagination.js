import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";
import "./Pagination.scss";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];
function Pagination({ props }) {
  // const {data} = props;
  const [, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [
    itemOffset,
    itemsPerPage,
    //  data
  ]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      {/* <div>
            {currentItems.map((item)=>{
                return(
                    <>
                    {item}
                    </>
                )
            })}
        </div> */}
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<< Previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination-con"
        pageLinkClassName="pagination-page"
        activeLinkClassName="pagination-active"
        previousLinkClassName="pagination-prev"
        nextLinkClassName="pagination-next"
      />
    </>
  );
}
export default Pagination;
