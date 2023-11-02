
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import ReactPaginate from "react-paginate";
import { memo, useEffect, useState } from "react";

const Section = ({ title, bgColor, productItems, itemsPerPage = 3  }) => {

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedProducts = productItems.slice(offset, offset + itemsPerPage);

  return (
    <section style={{ background: bgColor }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {paginatedProducts.map((productItem) => {
            return (
              <ProductCard
                key={productItem.id}
                title={title}
                productItem={productItem}
              />
            );
          })}
        </Row>
        <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(productItems.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
      </Container>
    </section>
  );
};

export default Section;
