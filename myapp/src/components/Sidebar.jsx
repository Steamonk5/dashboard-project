const Sidebar = ( { darkMode, setDarkMode, toggleDark } ) => {
  return (
    <aside className="hidden lg:flex flex-col">
      <div className="bg-[#12787C] text-white flex justify-around flex-col pl-10 pr-20 h-screen">
        <h2 className="text-xl font-medium">Finance<br />Tracker</h2>

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

        <button onClick={toggleDark} className="cursor-pointer text-left dark-btn focus:ring-2 focus:ring-[#a5d9b3] ring-offset-4 ring-offset-[#12787C] focus:outline-none hover:underline underline-offset-4 transition">Dark Mode</button>
      </div>

      <div className="flex-1 bg-[#12787C]"></div>
    </aside>
  )
}

export default Sidebar