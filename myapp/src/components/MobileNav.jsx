import helpIcon from '../assets/images/help icon.png';
import bellIcon from '../assets/images/bell icon.png';

const MobileNav = ( { navOpen, darkMode, setDarkMode, toggleDark } ) => {
  return (
    <div id="nav-page" className={`${navOpen ? 'flex' : 'hidden'} relative mt-5 h-96 w-full bg-[#12787C] text-white justify-around h-screen items-center flex-col`}>
      <h2 className="text-xl">Finance Tracker</h2>

      <div className="flex flex-col gap-5">
        <a>Dashboard</a>
        <a>Analytics</a>
        <a>Transactions</a>
        <a>Goals</a>
        <a>Reports</a>
      </div>

      <div className="flex flex-col gap-5">
        <a>Settings</a>
        <a>Notifications</a>
      </div>

      <button onClick={toggleDark} className="cursor-pointer dark-btn focus:ring-2 focus:ring-[#a5d9b3] ring-offset-4 ring-offset-[#12787C] hover:underline underline-offset-4 transition">Dark Mode</button>

      <img className="absolute bottom-5 left-5 w-10 h-10 p-2 bg-[#FFFEF9] rounded-full hover:scale-110 transition" src={helpIcon} />
      <img className="absolute bottom-5 right-5 w-10 h-10 p-2 bg-[#FFFEF9] rounded-full hover:scale-110 transition" src={bellIcon} />
    </div>
  )
}

export default MobileNav