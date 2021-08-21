import "./DisplayProductDetails.scss";
import Button from "../../components/Button/Button";
import ProductImg from "../../components/ProductImg/ProductImg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";

const DisplayProductDetails = ({ product, addCart, productImgs }) => {
  useEffect(() => {
    console.log(productImgs);
  });
  return (
    <div className="product__display">
      <Carousel width="100%">
        {productImgs.map((img) => {
          return (
            <div>
              <img
                src={`http://localhost:3001/admin/${img.img_url}`}
                alt={img.img_url}
              />
            </div>
          );
        })}
        {/* <div>
          <img src={`http://localhost:3001/admin/${productImgs[0].img_url}`} />
        </div>
        <div>
          <img src={`http://localhost:3001/admin/${productImgs[1].img_url}`} />
        </div>
        <div>
          <img src={`http://localhost:3001/admin/${productImgs[2].img_url}`} />
        </div> */}
      </Carousel>
      {/* <ProductImg item={product} class={"detail__img"} /> */}
      {/* <div className="detail__img">
          <img src={`http://localhost:3001/admin/${product.imgUrl}`} alt="" />
        </div> */}
      <div className="detail__info">
        <h2>{product.product_name}</h2>
        <h3>판매가 {product.price}원</h3>

        <table className="spec" cellSpacing="0">
          <tbody>
            <tr>
              <th>상품명</th>
              <td>{product.product_name}</td>
            </tr>
            <tr>
              <th>무게</th>
              <td>{product.weight}</td>
            </tr>
            <tr>
              <th>헤드사이즈</th>
              <td>{product.head_size}</td>
            </tr>
            <tr>
              <th>스트링패턴</th>
              <td>{product.string_pattern}</td>
            </tr>
            <tr>
              <th>밸런스</th>
              <td>{product.balance}</td>
            </tr>
            <tr>
              <th>길이</th>
              <td>{product.length}</td>
            </tr>
            <tr>
              <th>그립사이즈</th>
              <td>{product.grip_size}</td>
            </tr>
          </tbody>
        </table>
        <Button handleBtnClick={addCart} text={"장바구니 담기"} />
      </div>
    </div>
  );
};

export default DisplayProductDetails;