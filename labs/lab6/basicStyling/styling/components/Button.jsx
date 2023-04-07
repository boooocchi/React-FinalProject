// import styles from './Button.module.css'

// const Button = ({ children, handleClick }) => {
//     return (
//         <button onClick={handleClick} className={styles.btn}>
//             <h4 className='btn-text'>{children}</h4>
//         </button>
//     )
// }

// export default Button

import styles from './Button.module.css'

import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Button = ({ children, handleClick, selected }) => {

    const btnClass = cx({
        btn: true,
        btnSelected: selected
    })

    return (
        <button onClick={handleClick} className={btnClass}>
            <h4 className='btn-text'>{children}</h4>
        </button>
    )
}

export default Button