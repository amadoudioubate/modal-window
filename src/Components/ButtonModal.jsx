import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import ContentModal from './ContentModal'

export default function ButtonModal() {
    const [showModal, setShowModal] = useState(false)
  return (
    <>
        <button onClick={() => setShowModal(true)}>
            Open the modal
        </button>
        { showModal && 
            createPortal(<ContentModal closeModal = {() => setShowModal(false)}/>, document.body)
        }
    </>
    
  )
}
