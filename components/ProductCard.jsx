import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-md shadow-lg">
      <Link href={`/products/${product?._id}`}>
        <div className="w-[15rem] h-[18rem] relative">
          <Image
            className="object-cover"
            src={product?.image}
            fill
            quality={100}
            alt="product image"
          />
        </div>
        <div className="p-2">
          <h3 className="font-semibold">{product.title}</h3>
          <div className="flex justify-between my-1">
            <p className="flex items-center">
              <AiFillStar className="text-secondary" /> {product.rating}
            </p>
            <p className="font-medium">₹{product.price}</p>
          </div>
        </div>
      </Link>
      <button className="btn_primary w-full py-1">Add to cart</button>
    </div>
  );
};

export default ProductCard;
