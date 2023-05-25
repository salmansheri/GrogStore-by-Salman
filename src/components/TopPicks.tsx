import React from 'react'
import TopPicksItemsList from './TopPicksItemsList'

const TopPicks = () => {
  const topPicksItems = [
    {
        id: 1,
        image: "/assets/images/home5.png",
    },
    {
        id: 1,
        image: "/assets/images/home6.png",
    },
    {
        id: 1,
        image: "/assets/images/home7.png",
    },
    {
        id: 1,
        image: "/assets/images/home8.png",
    },
  ]
  return (
    <div className="h-[200px] px-[200px] my-10">
        <div>
          <h1>Top Picks for you</h1>
        </div>
        <div className="flex flex-row space-x-2 mt-10">
          {topPicksItems.map((item) => (

          <TopPicksItemsList 
            key={item.id}
            id={item.id}
            image={item.image}
          />
          ))}

        </div>

    </div>
  )
}

export default TopPicks