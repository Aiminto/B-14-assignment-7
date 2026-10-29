
import {ArrowBigDownDashIcon } from "lucide-react";
import Link from "next/link";
import ProductdetailsPage from "./ProductdetailsPage";


type RaiseProduct = {
    id: string | number;
    today:number;
    unit:string;
    categoryIcon: string;
    categoryNameBn: string;
    change: { dir: string };
};
const DownProducts = ({ product }: { product: RaiseProduct }) => {

    const isUp= product.change.dir === "up";
    const isDown= product.change.dir === "down";
    return (
       <Link href="/home"className="group block h-full focus:outline-hidden">
            <div className={`${isUp? "bg-gradient-to-r from-teal-500 to-emerald-400": isDown? "bg-gradient-to-r from-rose-500 to-amber-400":"bg-slate-400"}`}>

                <div className="card card-border bg-base-100" key={product.id}>
                    <div className="card-body">
                        
                        <h2 className="card-title"><span>{product.categoryIcon}</span>{product.categoryNameBn}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error"><ArrowBigDownDashIcon/> {product.change.dir}</button>
                        </div>

                        <span>Price:{product.unit}{product.today}</span>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default DownProducts;