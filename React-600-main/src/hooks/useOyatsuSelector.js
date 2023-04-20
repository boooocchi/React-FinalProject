import { useDispatch, useSelector } from 'react-redux'

import { addQty, removeQty } from '../redux/slice/mainSlice'

const selectDataByCategory = (state, category) =>{


 const arr= state.oyatsu.data.filter(item => item.category === category)
return arr
}

export const useOyatsuSelector = (category) => {
  const dispatch = useDispatch()
  const oyatsuData = useSelector(state => selectDataByCategory(state, category))

  const handleQuantity = (operator, id) => {
    if (operator === "+") {
      dispatch(addQty(id))
    } else {
      dispatch(removeQty(id))
    }
  }

  return { oyatsuData, handleQuantity }
}
