const Card2 = ({ children }) => {
  return (
    <div className="bg-[#E0DCBF] dark:bg-[#0a0a0a] hover:dark:bg-[#202222] dark:text-white flex justify-between px-10 items-center flex-1 rounded-3xl hover:bg-[#FFFEF9] transition ease-in">
      { children }
    </div>
  )
}

export default Card2