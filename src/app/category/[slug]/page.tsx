
import Link from "next/link";
interface Iproducts {
    id: string,
    slug: string,
    nameBn: string,
    icon: string
    // change:{
    //     dir: "up" | "down" | "flat"
    //     pct:number;
    // }
}

const CategoryPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    console.log(slug)

    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_PRODUCTS_URL as string}/categories/${slug}`);
    const categoryData = await res.json()

    return (
        <div>
            <Link href="/home" className="hover:text-teal-600 transition-colors font-medium">
            <h2>Category product:</h2>
                <div className="max-w-7xl mt-8 mx-auto  gap-4">
            <div className="">
                <div className="card-body border border-teal-300 py-2.5">

                    <h2 className="card-title">{categoryData.icon}{categoryData.slug} </h2>
                    
                    <div className="flex items-center justify-between">
                        <div className="badge badge-secondary">{categoryData.slug}</div>
                        <div className="badge badge-secondary">{categoryData.nameBn}</div>
                    </div>
                </div>
            </div>
        </div>
            </Link>
        </div>
    );
};

export default CategoryPage;