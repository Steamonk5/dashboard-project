const Card1 = ({ children }) => {
  return (
    <div className="group bg-[#FFFEF9] flex flex-1 items-center md:pl-[20%] sm:pl-[5%] pl-[15%] rounded-3xl hover:text-white hover:bg-[#12787C] hover:scale-[1.01] transition ease-in dark:hover:text-white dark:hover:bg-[#12787C] dark:bg-[#202222] duration-300">
      { children }
    </div>
  )
}

export default Card1