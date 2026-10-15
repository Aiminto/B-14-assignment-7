import Image from "next/image";
import Navbar from "./Navbar";


const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })
    return (

        <div>
            <header className="flex justify-between items-center">

                <div className="flex gap-2">
                    <Image className="text-[#16A34AS]" height={50} width={50} src={'/logo-icon.png'} alt="logo" />
                    <div>
                        <h2>বাজার দর</h2>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="flex gap-2.5">
                    <button className="btn bg-[#16A34A]">সাইন ইন</button>
                    <button className="btn ">সাইন আপ</button>
                </div>

            </header>

            <Navbar></Navbar>
        </div>
    );
};

export default Header;