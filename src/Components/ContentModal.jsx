import React from 'react'

export default function ContentModal({ closeModal }) {
  return (
    <div onClick={closeModal}>
        <div>
            <p>Here is the content</p>
            <button onClick={closeModal}>X</button>
        </div>
    </div>
  )
}
