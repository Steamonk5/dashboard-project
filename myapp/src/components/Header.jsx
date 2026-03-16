import searchIcon from '../assets/images/search icon.png';
import helpIcon from '../assets/images/help icon.png';
import bellIcon from '../assets/images/bell icon.png';
import profileIcon from '../assets/images/profile icon.png';

const Header = ({ name, navOpen, setNavOpen }) => {
  return (
    <header className="text-white flex justify-between px-[10%] md:px-[5%] py-7 bg-[#12787C]">
      {/* Mobile Nav Icon */}
      <button onClick={() => setNavOpen(prev => !prev)} className="cursor-pointer lg:hidden bg-[#FFFEF9] text-black text-5xl p-1.5 rounded-lg font-semibold focus:ring-2 focus:ring-[#a5d9b3] ring-offset-4 ring-offset-[#12787C] focus:outline-none hover:scale-105 active:scale-100 transition ease-in-out">☰</button>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex bg-[#FFFEF9] gap-3 rounded-3xl p-3 items-center">
        <img className="h-8 hover:scale-110 transition" src={searchIcon} />
        <input type="text" className="text-black outline-none text-sm" placeholder="Search..." />
      </div>

      <div className="flex gap-20">
        {/* Middle Buttons */}
        <div className="hidden lg:flex gap-5 items-center">
          <img className="w-10 h-10 p-2 bg-[#FFFEF9] rounded-full hover:scale-110 transition" src={helpIcon} />
          <img className="w-10 h-10 p-2 bg-[#FFFEF9] rounded-full hover:scale-110 transition" src={bellIcon} />
        </div>

        {/* Profile Section */}
        <div className="flex gap-7 items-center">
          <img className="w-14 h-14 hover:scale-110 transition bg-[#FFFEF9] rounded-full" src={profileIcon} />
          <h3 className="font-medium">{name}</h3>
        </div>
      </div>
    </header>
  )
}

export default Header