import React from "react";

const CartItem = (props) => {


  
     const { price, title, qty } = props.product;
     const {product,onIncreaseQuantity,onDecreaseQuantity,onDelete} = props;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} alt="" src={product.img} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>RS: {price}</div>
          <div style={{ color: "#777" }}>Qty:{qty} </div>
          <div className="cart-item-actions">
            {/* {Buttons} */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
              onClick={() => onIncreaseQuantity(props.product)}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={()=> onDecreaseQuantity(props.product)}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/3405/3405244.png"
              onClick={()=> onDelete(product.id)}
            />
          </div>
        </div>
      </div>
    );
  
}

const styles = {
  image: {
    height: 100,
    width: 100,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
