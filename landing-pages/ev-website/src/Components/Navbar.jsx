const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-[40px] mx-[120px] text-white">
      <div className="text-5xl font-medium" style={{fontFamily: 'Outfit'}}>EV-olution</div>
      <ul className="flex items-center text-sm gap-24">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="bg-white rounded-full py-2.5 px-9 text-[#262626]">Contact</li>
      </ul>
    </div>
  )
}

export default Navbar