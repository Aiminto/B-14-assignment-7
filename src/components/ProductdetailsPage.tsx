

interface IProduct {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
}

const ProductdetailsPage = ({ product }: { product: IProduct }) => {
    return (
        <div className="max-w-7xl mt-8 mx-auto  gap-4">
            <div className="">
                <div className="card-body border border-teal-300 py-2.5">

                    <h2 className="card-title">{product.categoryIcon}{product.nameBn} </h2>
                    <p>Yesterday price:{product.unit} {product.yesterday}</p>
                    <p> Today Price: {product.unit}{product.today}</p>
                    <p> Last MonthPrice: {product.unit}{product.lastMonth}</p>
                    <div className="flex items-center justify-between">
                        <div className="badge badge-secondary">{product.change.pct}</div>
                        <div className="badge badge-secondary">{product.change.dir}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductdetailsPage;