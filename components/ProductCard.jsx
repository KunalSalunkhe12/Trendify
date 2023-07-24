import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-md shadow-md">
      <Image
        className="w-full object-contain"
        src={product?.image}
        width={200}
        height={200}
        alt="product image"
      />
      <div className="p-2">
        <h3 className="font-semibold">{product.title}</h3>
        <div className="flex justify-between my-2">
          <p className="flex items-center">
            <AiFillStar className="text-secondary" /> {product.rating}
          </p>
          <p>₹{product.price}</p>
        </div>
        <button className="btn_primary w-full py-1">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
