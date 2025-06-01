import React from "react";
import { useState, useEffect } from "react";

const Pagination = ({ onPageChange, totalPages }) => {
  const [Pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [pageLimit, setPageLimit] = useState();
  const threshold = 10;

  const setNewPageLimit = (page) => {
    let half = Math.floor(threshold / 2);
    let start = Math.max(1, page - half);
    let end = Math.min(totalPages, start + threshold - 1);

    if (end - start + 1 < threshold) {
      start = Math.max(1, end - threshold + 1);
    }
    const list = Array.from({ length: end - start + 1 }, (_, i) => i + start);
    setPages(list);
  };

  const handleChange = (page) => {
    onPageChange(page);
    setSelectedPage(page);
    setNewPageLimit(page);
  };

  useEffect(() => {
    setPageLimit(totalPages);
    const list = Array.from(
      { length: Math.min(totalPages, threshold) },
      (_, i) => i + 1
    );
    setPages(list);
  }, [totalPages]);

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
