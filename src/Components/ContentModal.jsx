import React from 'react'

export default function ContentModal({ closeModal }) {
  return (
    <div className='fixed inset-0 bg-slate-800/75 flex justify-center items-center' 
      onClick={closeModal}>
        <div className='relative bg-slate-300 text-slate-900 p-10 rounded mb-[10vh]'
            onClick={e => e.stopPropagation()}>
            <p>Here is the content</p>
            <button className=' absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded 
              p-1 flex justify-center items-center' 
              onClick={closeModal}>
                X
            </button>
        </div>
    </div>
  )
}
