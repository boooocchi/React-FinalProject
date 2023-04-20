import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getData } from '../redux/middleware/api'

import DrinkInventory from "../container/DrinkInventory"
import SnackInventory from "../container/SnackInventory"

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [])
  const sortHandler=(sort)=>{
    dispatch(getData(sort))
  }

  return (
    <div className="container mx-auto px-4">
      <div className='flex justify-end items-center my-8'>
        <div className='flex items-center gap-5'>
          <span>Order by:</span>
          <div className="tabs tabs-boxed bg-transparent">
            <button
            onClick={()=>sortHandler("name")}
          
              className={`tab`}
            >Name</button>
            <button  onClick={()=>sortHandler("quantity")} 
              className={`tab`}
            >Quantity</button>
            <button   onClick={()=>sortHandler("created_at")}
              className={`tab tab-active`}
            >Recent</button>
          </div>
        </div>
      </div>
      <div className='prose max-w-none'>
        <SnackInventory />
        <DrinkInventory />
      </div>
    </div>
  )
}

export default Home