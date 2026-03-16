import growthChart from '../assets/images/growth chart.png';
import pieChart from '../assets/images/pie chart.png';

import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

import data from '../data.json';

const Grid = ({ amount, change }) => {
  return (
    <section className="grid grid-cols-8 gap-5 p-5 lg:pl-0 flex-1">

      <div className="group bg-[#FFFEF9] duration-300 dark:text-white w-full rounded-3xl xl:col-span-5 col-span-8 hover:text-white dark:hover:text-white hover:bg-[#12787C] dark:hover:bg-[#12787C] dark:bg-[#202222] hover:scale-[1.01] transition ease-in">
        <div className="flex justify-between py-5 px-[5%] sm:px-[10%] items-center">
          <h3 className="text-[#12787C] dark:text-white font-semibold group-hover:text-white">performance over time</h3>
          <div className="flex gap-7 text-sm">
            <p>Monthly</p>
            <p>Weekly</p>
            <p>Yearly</p>
          </div>

        </div>
        <div className="bg-[#E0DCBF] m-7 mt-0 flex justify-center rounded-3xl hover:bg-[#FFFEF9] dark:bg-[#0a0a0a] hover:dark:bg-[#202222] transition ease-in">
          <img className="h-full" src={growthChart} alt="growth chart" />
        </div>
      </div>

      <div className="flex flex-col min-h-96 justify-between gap-5 xl:col-span-3 md:col-span-5 sm:col-span-4 col-span-8">
        { data.stats.map((item, index) => (
          <Card1 key={index}>
            <div className="flex flex-col gap-5 dark:text-white">
              <p>{item.label}</p>
              <h3 className="group-hover:text-white dark:text-white transition ease-in text-[#12787C] text-xl font-semibold">{item.amount}</h3>
            </div>

            <div className="flex flex-col gap-5">
              <div className="opacity-0">e</div>
              <p className="group-hover:text-white dark:text-white transition ease-in text-[#12787C] self-end text-sm font-medium">{item.change}</p>
            </div>
          </Card1>
        )) }
      </div>

      <div className="group bg-[#FFFEF9] duration-300 p-5 rounded-3xl min-h-96 text-lg flex flex-col justify-between md:col-span-3 sm:col-span-4 col-span-8 hover:bg-[#12787C] hover:scale-[1.01] transition ease-in dark:hover:text-white dark:hover:bg-[#12787C] dark:bg-[#202222]">
        <h2 className="text-[#12787C] text-xl py-7 px-[20%] pt-2 font-semibold group-hover:text-white transition ease-in dark:text-white">Recent Transactions</h2>
        <div className="flex flex-col justify-between gap-4 h-full">
          { data.transactions.map((item, index) => (
            <Card2 key={index}>
              <h3>{item.name}</h3>
              <p className="text-[#12787C] text-base font-medium dark:text-white">{item.amount}</p>
            </Card2>
          )) }
        </div>
      </div>

      <div className="group bg-[#FFFEF9] duration-300 p-3 pt-5 min-h-96 rounded-3xl text-lg flex flex-col justify-between xl:col-span-2 md:col-span-3 sm:col-span-4 col-span-8 hover:bg-[#12787C] hover:scale-[1.01] transition ease-in dark:hover:text-white dark:hover:bg-[#12787C] dark:bg-[#202222]">
        <h2 className="text-[#12787C] text-xl py-7 px-[20%] pt-2 font-semibold group-hover:text-white transition ease-in dark:text-white">Goals</h2>
        <div className="flex flex-col gap-3 justify-between h-full">
          { data.goals.map((item, index) => (
            <Card3 key={index}>
              <input type="checkbox" className="shrink-0 cursor-pointer outline-none w-5 h-5 accent-[#12787C] focus:ring-2 focus:ring-[#a5d9b3] ring-offset-4 ring-offset-[#E0DCBF]" />
              <p className="text-sm font-medium">{item.label}</p>
            </Card3>
          )) }
        </div>
      </div>

      <div className="group bg-[#FFFEF9] duration-300 flex flex-col p-[10%] pt-5 rounded-3xl xl:col-span-3 md:col-span-5 sm:col-span-4 col-span-8 justify-around hover:text-white hover:bg-[#12787C] hover:scale-[1.01] transition ease-in dark:hover:text-white dark:hover:bg-[#12787C] dark:bg-[#202222]">
        <h2 className="text-[#12787C] text-xl py-3 px-10 font-semibold group-hover:text-white transition ease-in dark:text-white">Total Spending</h2>
        <img src={pieChart} alt="total spendings pie chart" />
      </div>

    </section>
  )
}

export default Grid