interface IDownProducts {
        id: number,
    categoryNameBn: string,
    categoryIcon: string
    unit: string

    today: number

    change: {
        dir: string,
        pct: number
    }

}

const DownProducts = ({ p }: { p: IDownProducts[] }) => {
    const { id,categoryNameBn, categoryIcon, unit, change } = p
    return (
        <div>
            <div className="">

                <div className="card card-border bg-base-100" key={id}>
                    <div className="card-body">
                        <h2 className="card-title"><span>{categoryIcon}</span>{categoryNameBn}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-success text-white">{change.down}</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DownProducts;