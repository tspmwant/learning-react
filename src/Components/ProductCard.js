import React from "react";
import Product from "../Views/Product";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="border mb-4 rounded overflow-hidden">
      <Link to={`/product/${props.product.id}`}>
        <div
          style={{
            backgroundImage: `url('${props.product.images[0].imageUrl}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/product/${props.product.id}`}>
            {props.product.name} ($ {props.product.price})
          </Link>
        </h3>
        <Link
          to={`/product/${props.product.id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full rounded"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
