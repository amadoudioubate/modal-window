import React, {useState} from 'react'

export default function ButtonModal() {
    const [showModal, setShowModal] = useState(false)
  return (
    <button onClick={() => setShowModal(true)}>
        Open the modal
    </button>
  )
}
