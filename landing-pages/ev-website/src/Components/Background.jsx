import video1 from "../assets/video1.mp4";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="fixed object-cover top-0 right-0 left-0 bottom-0 -z-1" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    )
  }else if(heroCount === 0){
    return (
      <img src={image1} className="fixed object-cover top-0 right-0 left-0 bottom-0 -z-1" alt="background" />
    )
  }else if(heroCount === 1){
    return (
      <img src={image2} className="fixed object-cover top-0 right-0 left-0 bottom-0 -z-1" alt="background" />
    )
  }else{
    return (
      <img src={image3} className="fixed object-cover top-0 right-0 left-0 bottom-0 -z-1" alt="background" />
    )
  }
}

export default Background