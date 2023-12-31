import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard = ({ title, productItem }) => {
  
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}
      <img
        loading="lazy"
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3>{productItem.productName}</h3>
        <div className="desc">
           <h7>Description</h7> <br></br>
          <b>Lorem ipsum dolor, sit amet consectetuellendus pariatur.?</b>
        </div>
        <div className="price">
          <h4>${productItem.price}</h4>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
