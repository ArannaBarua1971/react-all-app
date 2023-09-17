import { useState } from "react";

export default function Banner() {
  const sliderItem = ["Forza-Horizon-5.jpg", "gtav.jpg","cyber_punk.jpg","uncharted.webp"];

  const [index,setIndex]=useState(0)
  console
  const [bannerImg, setBannerImg] = useState(sliderItem[index]);

  const bgChange = () => {
    setIndex((index+1)%sliderItem.length)
    setBannerImg(sliderItem[index])
  };

  return (
    <>
      <p className="hidden">{setInterval(function(){bgChange()}, 2500)}</p>
      <div>
        <div className="slider">
          <div className="slideItem flex justify-center bg-black rounded-xl h-[500px]">
            <img src={"./images/" + bannerImg} className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
