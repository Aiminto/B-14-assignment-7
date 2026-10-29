import { ArrowBigUpDashIcon } from "lucide-react";
import Link from "next/link";


type RaiseProduct = {
    id: string | number;
    categoryIcon: string;
    categoryNameBn: string;
    change: { dir: string };
};

const RaiseProducts = ({ product }: { product: RaiseProduct }) => {

    return (
        <Link href={"/"} className="group block h-full focus:outline-hidden">
            <div className="">

                <div className="card card-border bg-base-100" key={product.id}>
                    <div className="card-body">
                        <h2 className="card-title"><span>{product.categoryIcon}</span>{product.categoryNameBn}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error"><ArrowBigUpDashIcon />{product.change.dir}</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </Link>
    );
};

export default RaiseProducts;