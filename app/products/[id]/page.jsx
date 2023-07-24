import Image from "next/image";

const getProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const ProductDetails = async ({ params }) => {
  const product = await getProduct(params.id);

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex gap-4 shadow-lg w-full md:w-3/4 lg:w-3/5">
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
          <div className="flex flex-col gap-2 mt-6">
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
          </div>
          <button className="btn_primary mt-6 py-2 px-6">Add to cart</button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
