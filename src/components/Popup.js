import React from 'react'
import PopupContent from './PopupContent'

export default function Popup (props) {
  const {card, onClose, prevCard, nextCard} = props

  return (
    <div className={`popup ${card && 'popup_opened'}`}>
      <button
        type="button"
        className="popup__prev"
        onClick={prevCard}
        ></button>
      <button
        type="button"
        className="popup__next"
        onClick={nextCard}
        ></button>
      <button
        type="button"
        className="popup__close-btn"
        onClick={onClose}
      >
      </button>
      <PopupContent
        card={card}
      />
    </div>
  )
}
