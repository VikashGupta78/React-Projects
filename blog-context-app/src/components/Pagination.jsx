import React, { useContext } from 'react';
import { appContext } from '../context/appContext';

function Pagination() {
  const { page, totalPages, pageChangeHandler } = useContext(appContext);
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex gap-3 mb-5">
        {page > 1 && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => pageChangeHandler(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={() => pageChangeHandler(page + 1)}
          >
            Next
          </button>
        )}
      </div>
      <div className="text-lg text-gray-700">Page {page} of {totalPages}</div>
    </div>
  );
}

export default Pagination;
