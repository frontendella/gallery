import { Pagination } from "react-bootstrap";
import "../styles/blocks/pagination.css";

const PaginationList = ({ imagesPerPage, totalImages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Pagination className="mx-auto justify-content-center">
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
