import { ComponentProps, PropsWithChildren } from "react";
import cx from "clsx";

interface PaginationProps extends ComponentProps<"div"> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}) => {
  const renderPageNumbers = () => {
    const adjacentPageCount = 2;
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    const visiblePages = pageNumbers.filter(
      (page) =>
        page === 1 ||
        page === totalPages ||
        (page >= currentPage - adjacentPageCount &&
          page <= currentPage + adjacentPageCount)
    );

    const pagesWithEllipses: (number | null)[] = [];
    let lastPage = 0;

    visiblePages.forEach((page) => {
      if (lastPage !== 0 && page - lastPage > 1) {
        // If there is a gap between pages, insert an ellipse
        pagesWithEllipses.push(null);
      }
      pagesWithEllipses.push(page);
      lastPage = page;
    });

    return pagesWithEllipses.map((page) =>
      page !== null ? (
        <PaginationContainer>
          <button key={page} onClick={() => onPageChange(page)}>
            {page}
          </button>
        </PaginationContainer>
      ) : (
        <span key="ellipsis">...</span>
      )
    );
  };

  return (
    <div
      className={cx("flex flex-row items-center justify-center", className)}
      {...props}
    >
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

const PaginationContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-[30px] h-[30px] border border-solid hover:border-[#ffffff]">
      {children}
    </div>
  );
};
