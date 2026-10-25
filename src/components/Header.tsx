import Image from "next/image";
import Navbar from "./Navbar";
import UserInfo from "./UserInfo";


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
               <UserInfo></UserInfo>

            </header>

            <Navbar></Navbar>
        </div>
    );
};

export default Header;