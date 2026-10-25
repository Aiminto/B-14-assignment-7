
 interface IraiceProducts
 {  id: number,
     categoryNameBn: string,
    categoryIcon:string
    unit:string
    
    today: number
   
    change: {
      dir:string,
      pct: number}

    }

const RaiseProducts = ({ p }:{p:IraiceProducts[]}) => {
    const {change,id,categoryIcon,categoryNameBn}=p
    return (
        <div className="">
            <h2>আজ দাম বেড়েছে</h2>
             
                <div className="card card-border bg-base-100" key={id}>
                    <div className="card-body">
                        <h2 className="card-title"><span>{categoryIcon}</span>{categoryNameBn}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-error">{change.dir}</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default RaiseProducts;