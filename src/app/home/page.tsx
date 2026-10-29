import ProductdetailsPage from "@/components/ProductdetailsPage";
import type { ComponentProps } from "react";

type IProduct = ComponentProps<typeof ProductdetailsPage>["product"];


const Homepage = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const allproducts = await response.json()
    console.log(allproducts, " this list products")

    return (
        <div className="bg-base-200 shadow-sm w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {
                allproducts?.map((product: IProduct) => <ProductdetailsPage key={product.id} product={product}></ProductdetailsPage>)
            }

        </div>
    );
};

export default Homepage;