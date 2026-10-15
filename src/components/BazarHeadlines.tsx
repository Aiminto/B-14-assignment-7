interface Ibazarheadline{
    id:string,
    nameBn:string,
    change:string,
    pct:number | string,
}

const BazarHeadlinesMarquee = async() => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products")
    const bazarHeadlines:Ibazarheadline[] = await res.json();
    console.log("Marquee data",BazarHeadlinesMarquee)
    return (
        <div className="flex gap-3 max-w-7xl mx-auto mt-10 shadow-sm">
            {
                bazarHeadlines.map(bh =><div key={bh.id}>
                   <p> {bh.nameBn}</p>
                   <p>{bh.change.pct}</p>
                </div>)
            }
        </div>
    );
};

export default BazarHeadlinesMarquee;