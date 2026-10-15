import Link from "next/link";

interface InavData {
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
}
const Navbar = async () => {


    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/categories")

    const NavCategories: InavData[] = await res.json()
    console.log(NavCategories, "nav")
    return (
        <div className="gap-3 shadow-sm mt-10">

            <div className="flex text-3xl bg-base-300 justify-center items-end gap-5 mx-auto">
              
                    {
                        NavCategories.map(nc => <Link href={'#'} key={nc.id}>
                            <div >
                                <p>{nc.icon}{nc.nameBn}</p>
                            </div>
                        </Link>)
                    }
            </div>
        </div>
    );
};

export default Navbar;