const ProductsDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
const {slug}= await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_PRODUCTS_URL as string}/products/${slug}`)
    const allproducts = res.json()
    


    return (
        <div>
            <h1>products page</h1>



        </div>
    );
};

export default ProductsDetailsPage;