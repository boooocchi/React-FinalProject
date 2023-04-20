import React from 'react'
import { useFlasher } from '../hooks/useFlasher'

const Snack = ({ snack, handleQuantity }) => {
    return (
        <div className='card' style={{ width: "15rem"}} ref={useFlasher()}>
            <div className="card-header text-center"><h4>{snack.name}</h4></div>
            <div className="card-body fw-bold px-5 text-center">
                Quantity
                <p className='fs-3 mb-0'>{snack.quantity}</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
                <button
                    className='btn btn-info m-1'
                    onClick={() => handleQuantity("+", snack.id)}>
                    +
                </button>
                <button
                    className='btn btn-success m-1'
                    onClick={() => handleQuantity("-", snack.id)}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Snack