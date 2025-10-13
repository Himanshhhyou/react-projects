import arrow_btn from "../assets/arrow_btn.png";
import play_icon from "../assets/play_icon.png";
import pause_icon from "../assets/pause_icon.png";

const Hero = ({setPlayStatus, heroData, heroCount, setHeroCount, playStatus}) => {
  return (
    <div className="mx-28 mt-36">
      <div className="text-white text-8xl font-medium leading-32">
        <p>{heroData.text1}</p>
        <p>{heroData.text2} </p>
      </div>
      <div className="flex items-center gap-11 mt-16 py-1.5 pl-8 px-2 rounded-[60px] bg-white cursor-pointer" style={{width: "fit-content"}}>
        <p className="text-[#292929] text-xl font-medium">Explore the future of mobility</p>
        <img src={arrow_btn} alt="" />
      </div>
      <div className="mt-12 flex justify-between">
        <ul className="flex items-center gap-6">
          <li onClick={() => setHeroCount(0)} className={`${heroCount === 0 ? "w-4 h-4 rounded-full bg-red-400 cursor-pointer" : "w-4 h-4 rounded-full bg-gray-300 cursor-pointer"}`}></li>
          <li onClick={() => setHeroCount(1)} className={`${heroCount === 1 ? "w-4 h-4 rounded-full bg-red-400 cursor-pointer" : "w-4 h-4 rounded-full bg-gray-300 cursor-pointer"}`}></li>
          <li onClick={() => setHeroCount(2)} className={`${heroCount === 2 ? "w-4 h-4 rounded-full bg-red-400 cursor-pointer" : "w-4 h-4 rounded-full bg-gray-300 cursor-pointer"}`}></li>
        </ul>
      <div className="flex items-center gap-7">
        <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt="" />
        <p className="text-white text-xl">See the video</p>
      </div>
      </div>
    </div>
  )
}

export default Hero