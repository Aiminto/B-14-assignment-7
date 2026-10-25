import BazarHeadlinesMarquee from "@/components/BazarHeadlines";
import DownProducts from "@/components/DownProducts";
import Hero from "@/components/Hero";
import ProductsPage from "@/components/ProductsPage";
import RaiseProducts from "@/components/RaiseProducts";

interface Iproducts {
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
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];

}


export default async function Home() {
  const response = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
    { next: { revalidate: 60 } }
  );

  if (!response.ok) throw new Error("Failed to fetch products");
  const products: Iproducts[] = await response.json();

  const filtersProducts: Iproducts[] = (products as Iproducts[]).filter((rp) => rp.change.dir === "up").sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);
  const filtersProducts2: Iproducts[] = (products as Iproducts[]).filter((rp) => rp.change.dir === "down").sort((x, y) => y.change.pct - x.change.pct).slice(0, 6);




  return (
    <div>
      <BazarHeadlinesMarquee></BazarHeadlinesMarquee>
      <Hero></Hero>
      <h1 className="font-bold text-5xl text-[1D271F]">আজ দাম বেড়েছে</h1>
      <h1>{filtersProducts.length}</h1>
      <div className="grid grid-cols-3 mx-3 sm:grid-cols-1 md: grid-cols-2 lg:grid-cols-3">
        {
          filtersProducts.map(p => <RaiseProducts key={p.id} p={p}>

          </RaiseProducts>)
        }
      </div>

       <h1 className="font-bold text-5xl text-[1D271F]">আজ দাম কমেছে</h1>

      <div className="grid grid-cols-3 mx-3 sm:grid-cols-1 md: grid-cols-2 lg:grid-cols-3">
        {
          filtersProducts2.map(p => <DownProducts key={p.id} p={p}>

          </DownProducts>)
        }
      </div>

      <div>
        {
          products.map(ap=><ProductsPage key={ap.id} ap={ap}></ProductsPage>)
        }
      </div>
    </div>
  );
}
