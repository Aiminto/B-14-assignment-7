import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Ibazarheadline {
    id: string,
    slug: string,
    nameBn: string,
    today: string,
    image: string,
    categoryIcon: string,
    unit: string,
    change: {
        dir: string,
        pct: number,
    },
}

const BazarHeadlinesMarquee = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products")
    const bazarHeadlines: Ibazarheadline[] = await res.json();
    console.log("Marquee data", BazarHeadlinesMarquee)
    return (
        <div className="flex gap-3 justify-center items-center mt-10 shadow-sm">
            <div className="flex justify-center items-center max-w-7xl mx-auto">
                <p className="bg-red-700 text-white py-1 px-5 font-bold">Bazar dor</p>
                <MarqueeText className="py-1" duration={20}
                    pauseOnHover={true}
                    direction="right"
                >
                    {
                        bazarHeadlines.map(bh => <div className="flex gap-2" key={bh.id}>
                            <p> {bh.nameBn}</p>
                            <span className="mx-5">﹒</span>
                            <p>{bh.change.pct}</p>

                            <p>{bh.today}</p>
                            <p>{bh.unit}</p>
                            <p>{bh.categoryIcon}</p>


                            <p>{bh.change.dir}</p>

                        </div>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default BazarHeadlinesMarquee;