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

const ProductsPage = async() => {
  const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products?category=chal");
  const allproducts =await res.json();
  console.log(allproducts,"all products from products page")
    return (
        <div>
          {
            allproducts.map(alproduct=><div key={alproduct.id}>

              <h1>{allproducts.slug}</h1>

            </div>)
          } 
    
        </div>
    );
};

export default ProductsPage;