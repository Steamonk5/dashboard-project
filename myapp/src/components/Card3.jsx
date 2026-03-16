const Card3 = ({ children }) => {
  return (
    <label className="bg-[#E0DCBF] dark:bg-[#0a0a0a] hover:dark:bg-[#202222] dark:text-white flex gap-5 px-10 rounded-3xl items-center flex-1 hover:bg-[#FFFEF9] transition ease-in">
      { children }
    </label>
  )
}

export default Card3