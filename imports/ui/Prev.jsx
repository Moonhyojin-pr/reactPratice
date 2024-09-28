import React from "react"


  export default function Prev({currentPage, totalMessages, itemsPerPage, handleNext, handlePrevious}) {
    //const totalPages = Math.ceil(totalMessages /itemsPerPage); //전체 페이지 수 계산

    return (
      <nav
        aria-label="Pagination"
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> ~{' '} <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalMessages)}</span> {' '}
            총 <span className="font-medium">{totalMessages}</span> 
          </p>
        </div>
        <div className="flex flex-1 justify-between sm:justify-end">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); //기본 동작 방지
              handlePrevious();
            }}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </a>
          <a
            href="#"
            onClick={(e) =>{
              e.preventDefault(); //기본 동작 방지
              handleNext();
            }}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </a>
        </div>
      </nav>
    )
  }