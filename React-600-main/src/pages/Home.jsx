import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getData } from '../redux/middleware/api'
import { setData } from '../redux/slice/mainSlice'
import { supabase } from '../lib/supabaseClient'

import DrinkInventory from "../container/DrinkInventory"
import SnackInventory from "../container/SnackInventory"

const Home = () => {
  const isDataFetched = useSelector((state) => state.isDataFetched)
  const oyatsuData=useSelector((state)=>state.data)
  const dispatch = useDispatch()
  const fetchItems = async () => {
    const { data, error } = await supabase
      .from('oyatsu')
      .select()
      
      
      
     

    if (error) {
      console.log(error)
    }

    //dispatch to store
    dispatch(setData(data))
  }
  

   useEffect(() => {


      fetchItems()
    


    
  }, [])

  return (
    <div className="container mx-auto px-4">
      <div className='prose max-w-none'>
        <SnackInventory />
        <DrinkInventory />
      </div>
    </div>
  )
}

export default Home