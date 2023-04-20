import React from 'react'
import { useFlasher } from '../hooks/useFlasher'

const Drink = ({ drink, handleQuantity }) => {
    return (
        <div className='card' style={{ width: "15rem"}} ref={useFlasher()}>
            <div className="card-header text-center"><h4>{drink.name}</h4></div>
            <div className="card-body fw-bold px-5 text-center">
                Quantity
                <p className='fs-3 mb-0'>{drink.quantity}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button
                    className='btn btn-info m-1'
                    onClick={() => handleQuantity("+", drink.id)}>
                    +
                </button>
                <button
                    className='btn btn-success m-1'
                    onClick={() => handleQuantity("-", drink.id)}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Drink