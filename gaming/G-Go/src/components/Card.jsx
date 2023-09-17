export default function Card({imageSrc,title,type,price}){
    return (
        <div className="card bg-black rounded-xl p-4 m-3">
            <div className="card_img">
                <img src={imageSrc} className="w-[230px] rounded-xl" alt="" />
            </div>
            <div className="card_content my-1">
                <div className="card_title">
                    <h2 className="text-white font-semibold text-2xl my-1">{title}</h2>
                </div>
                <div className="card_details">
                    <h4 className="type text-white font-semibold">{type}</h4>
                    <div className="price_buy">
                        <ul className="flex justify-between items-center">
                            <li className="price text-3xl font-extrabold text-orange-500 ">{price}</li>
                            <li className="addToCart">
                                <button className="bg-orange-500 rounded-xl py-2 px-9 font-semibold">Buy Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}