import Image from "next/image";



const Hero = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })
    return (
        <div className="max-w-7xl mx-auto mt-10">

            <div className="flex justify-center gap-4 items-center">
                <div className="py-5">
                    <button className=" btn text-[#16A34A] rounded-full">{date}</button>
                    <h1 className="font-bold text-5xl text-[#1D271F]">আজকের বাজারের দাম এক নজরে</h1>

                     <button className="btn bg-[#16A34A] rounded-2xl">সব পণ্য দেখুন</button>

                    <p className="font-semibold text-sm">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
                </div>

                <Image height={500} width={500} src={'/bazar-hero.png'} alt="bazar-hero.png"></Image>

            </div>

        </div>
    );
};

export default Hero;