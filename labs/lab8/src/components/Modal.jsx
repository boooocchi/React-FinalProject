import { useState, useEffect, useRef } from 'react'
import styles from '@/style/Modal.module.scss'
import { useClickOutside } from '@/hooks/useClickOutside'

function Modal() {
    const [showModal, setShowModal] = useState(false)

    const modalRef = useRef()

    useClickOutside(modalRef, showModal, () => setShowModal(false))

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Modal</button>
            {showModal && (
                <div className={styles.overlay}>
                    <div
                        ref={modalRef}
                        className={styles.modal}
                    >
                        <div className={styles.modalContent}>
                        <h3>Modal Title</h3>
                        <p>Modal Content</p>
                        <button onClick={() => setShowModal(false)}>x</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal