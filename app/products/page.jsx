import ProductCard from "@/components/ProductCard";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const page = async () => {
  const products = await getProducts();

  return (
    <section>
      <h1 className="text-xl font-semibold my-4">All products</h1>
      <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-14">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default page;
