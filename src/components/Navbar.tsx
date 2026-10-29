"use client"

import { ICategory } from "@/type/types";
import { House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
    // const [dropdownOpen, setDropdownOpen]= useState(false)
    const [categories, setCategories] = useState<ICategory[]>([]);
    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/bazardor/categories")
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'data nai keno')
                setCategories(data)
            });
    }, []);

    const pathname = usePathname()


    return (
        <div className="gap-3 shadow-sm mt-10">

            <div className="flex text-3xl bg-base-300 justify-center items-end gap-5 mx-auto">
                <Link href="/home"  className="hover:text-teal-700 transition-colors font-medium">
                    <div className="flex gap-2 items-center">
                        <House /><p>Home</p>
                    </div>
                    <small><button className="btn bg-[#16A34A] rounded-2xl">সব পণ্য দেখুন</button></small>


                </Link>

                {
                    categories?.map((nc) => {
                        const isActive = pathname === `/category/${nc.slug}`
                        return (
                            <Link key={nc.slug} href={`/category/${nc.slug}`} className={`px-3 py-1 rounded-full ${isActive ? "bg-teal-500 text-white shadow-2xl font-bold" : "text-slate-600 hover:bg-slate-200/70 font-medium"}`}>
                                <p>{nc.icon}{nc.nameBn}</p>

                            </Link>
                        )

                    })
                }
            </div>

        </div>
    );
};

export default Navbar;