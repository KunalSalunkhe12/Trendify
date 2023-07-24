import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-md shadow-lg">
      <Link href={`/products/${product?._id}`}>
        <Image
          className="w-full object-contain"
          src={product?.image}
          width={250}
          height={250}
          quality={100}
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
        </div>
      </Link>
      <button className="btn_primary w-full py-1">Add to cart</button>
    </div>
  );
};

export default ProductCard;
