import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getData } from './redux/middleware/api'

import DrinkInventory from "./container/DrinkInventory"
import SnackInventory from "./container/SnackInventory"

import './App.css'

export default function App() {
  const isDataFetched = useSelector((state) => state.isDataFetched)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isDataFetched) {
      dispatch(getData())
    }
  }, [])

  return (
    <main className="d-flex justify-content-center">

      <div className="container">
        <SnackInventory />
        <DrinkInventory />
      </div>
    </main>
  )
}