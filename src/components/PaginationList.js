import { Pagination } from "react-bootstrap";

const PaginationList = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination className="mx-auto">
        {pageNumbers.map((number) => (
          <Pagination.Item key={number} className="page-item">
            <a onClick={() => paginate(number)} href="" className="page-link">
              {number}
            </a>
          </Pagination.Item>
        ))}
      </Pagination>
    </nav>
  );
};

export default PaginationList;
