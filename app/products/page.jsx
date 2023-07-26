import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/utils/products";

const ProductsList = async () => {
  const products = await getProducts();

  if (products.error) {
    throw new Error(products.error);
  }

  return (
    <section className="my-20">
      <h1 className="text-xl font-semibold my-4">All products</h1>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
