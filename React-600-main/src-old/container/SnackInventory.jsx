import { categories } from '../redux/constants'
import { useOyatsuSelector } from '../hooks/useOyatsuSelector'

import Snack from '../components/Snack'

const SnackInventory = () => {
    const { oyatsuData, handleQuantity } = useOyatsuSelector(categories.snacks)

    return (
        <>
            <h1>Snack Department</h1>
            <div className="row my-5">
                <div className="card-group">
                    {oyatsuData && oyatsuData.length > 0 && oyatsuData.map((snack) => (
                        <Snack
                            key={snack.id}
                            snack={snack}
                            handleQuantity={handleQuantity}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default SnackInventory


