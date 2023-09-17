import Banner from "./Banner"
import Card from "./Card"
export default function Home(){

    
    return (
        <div className="w-[80%] m-4 ">
            <Banner/>
            <div className="game_items flex flex-wrap m-3">
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
                <Card imageSrc='./images/Forza-Horizon-5-poster.jpg' title='Forza-Horizon-5' type='xbox' price='40$'/>
            </div>
        </div>
    )
}