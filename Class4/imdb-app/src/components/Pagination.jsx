import React from "react";
import { useState } from "react";

const Pagination = ({ onPageChange }) => {
  const [Pages, setCurrentPage] = useState([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selectedPage, setSelectedPage] = useState(Pages[0]);

  const handleChange = (page) => {
    onPageChange(page);
    setSelectedPage(page);
  };
  return (
    <div className="pagination">
      <button
        onClick={() => handleChange(selectedPage - 1)}
        disabled={selectedPage === Pages[0]}
      >
        &lt;
      </button>
      {Pages.map((page) => (
        <button
          className={selectedPage === page ? "active" : ""}
          key={page}
          onClick={() => handleChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handleChange(selectedPage + 1)}
        disabled={selectedPage === Pages[Pages.length - 1]}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
