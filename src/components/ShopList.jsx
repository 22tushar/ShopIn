import { Row } from "react-bootstrap";
import { memo, useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import ReactPaginate from "react-paginate";

const ShopList = ({ productItems, itemsPerPage = 3 }) => {
  useEffect(() => {}, [productItems]);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (productItems.length === 0) {
    return <h1 className="not-found">Product Not Found !!</h1>;
  }

  const offset = currentPage * itemsPerPage;
  const paginatedProducts = productItems.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <Row className="justify-content-center">
        {paginatedProducts.map((productItem) => {
          return (
            <ProductCard
              key={productItem.id}
              title={null}
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
    </div>
  );
};

export default memo(ShopList);