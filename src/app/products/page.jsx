import { revalidatePath } from "next/cache";
import Products from "../Components/Products";

const getProducts = async() => {
    // const res = await fetch("http://localhost:5000/products",{ cache: 'force-cache' });
    // const res = await fetch("http://localhost:5000/products",{ cache: 'no-cache' });
    const res = await fetch("http://localhost:5000/products",{ next: {revalidate:10}});
    return res.json()
}

const ProductsPage = async() => {
    const products = await getProducts();
    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;