import React from 'react'

export default function PopupContent (props) {
    const {card} = props
  
    const [like, setLike] = React.useState (false)
    const [modal, setModal] = React.useState ([])
  
    React.useEffect ( () => {
      setLike(card ? card.isLiked : false)
    }, [card])
  
  
    const likeCard = () => {
      setLike(!like)
    }
  
    const input = React.useRef()
  
    return (
        <div className="popup__container">
          <img
            className="popup__img"
            src={card ? card.link : ''}
            alt={card ? card.title : ''}
          />
          <div className="popup__about">
            <h2 className="popup__title">{card ? card.title : ''}</h2>
            <div className="popup__rate">
              <p className="popup__count">{card && like ? '1' : '0'}</p>
              <button
                type="button"
                aria-label="Like"
                className={`popup__like-btn ${card && like && 'popup__like-btn_liked'}`}
                onClick={likeCard}
              >
              </button>
            </div>
          </div>
          
        </div>
    )
  }
