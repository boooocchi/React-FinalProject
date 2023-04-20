import { categories } from '../redux/constants'
import { useOyatsuSelector } from '../hooks/useOyatsuSelector'

import Drink from '../components/Drink'

const DrinkInventory = () => {
    const { oyatsuData, handleQuantity } = useOyatsuSelector(categories.drinks)

    return (
        <>
            <h1>Drink Department</h1>
            <div className="row my-5">
                <div className="card-group">
                    {oyatsuData && oyatsuData.length > 0 && oyatsuData.map((drink) => (
                        <Drink
                            key={drink.id}
                            drink={drink}
                            handleQuantity={handleQuantity}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default DrinkInventory

