import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import CartButton from "./CartButton";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-md shadow-lg">
      <Link href={`/products/${product?._id}`}>
        <div className="w-[15rem] h-[18rem] relative">
          <Image
            className="object-cover"
            src={product?.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="product image"
          />
        </div>
        <div className="p-2">
          <h3 className="font-semibold">{product.title}</h3>
          <div className="flex justify-between my-2">
            <p className="flex items-center">
              <AiFillStar className="text-secondary" /> {product.rating}
            </p>
            <p className="font-medium">₹{product.price}</p>
          </div>
          <p>
            <span className="text-sm font-medium">Category: </span>
            {product.category}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
