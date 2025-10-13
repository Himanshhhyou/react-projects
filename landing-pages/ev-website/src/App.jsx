import Background from "./Components/Background";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

const App = () => {
  let heroData = [
    {text1:"Revolutionize", text2:"your ride"},
    {text1:"Explore", text2:"the future of mobility"},
    {text1:"Join the", text2:"EV revolution"},
  ]
  const[heroCount, setHeroCount] = useState(0);
  const[playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((heroCount)=>{return heroCount===2?0:heroCount+1})

    },3000)
  },[])
  return (
    <div>
      <Background 
        playStatus={playStatus}
        heroCount={heroCount} 
      />
      <Navbar />
      <Hero 
        setPlayStatus={setPlayStatus} 
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      
      />
    </div>
  )
}

export default App