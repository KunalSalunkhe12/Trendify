import Image from "next/image";
import { getProductById } from "@/utils/products";
import CartButton from "@/components/CartButton";

const ProductDetails = async ({ params }) => {
  const product = await getProductById(params.id);

  if (product.error) {
    throw new Error(product.error);
  }

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-4 shadow-lg w-full sm:w-3/5 md:w-3/4 lg:w-3/5 my-20">
        <Image
          src={product.image}
          alt="Product image"
          width={200}
          height={200}
          quality={100}
          className="object-cover w-auto h-auto"
        />
        <div className="p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <p>{product.reviews} reviews</p>
            <p className="text-lg font-semibold">₹{product.price}</p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <p>
              <span className="font-semibold">Availability: </span>
              {product.in_stock ? "In stock" : "Out of stock"}
            </p>
            <p>
              <span className="font-semibold">Description: </span>
              {product.description}
            </p>
            <p>
              <span className="font-semibold">Size: </span>
              {product.size}
            </p>
            <p>
              <span className="font-semibold">Delivery:</span> in{" "}
              {product.delivery_time} days
            </p>
            <CartButton item={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
