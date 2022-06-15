import React from 'react'
import logo from '../assets/logo.svg';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Popup from './Popup'
import {cardList} from '../images.js'

function App() {
  const [selectedCard, setSelectedCard] = React.useState(null)
  
  const closePopup = () => {
    setSelectedCard(null)
  }

  const handleCardClick = (card, i) => {
    setSelectedCard(card)
    setInd(i)
  }

  const [ind, setInd] = React.useState(null)

  const handlePrevCard = () => {
    setSelectedCard(cardList[ind - 1])
    setInd(ind - 1)
  }

  const handleNextCard = () => {
    setSelectedCard(cardList[ind + 1])
    setInd(ind + 1)
  }

  return (
    <>
      <Header>
      </Header>

      <Content
        onCardClick={handleCardClick}
      >
      </Content>

      <Popup
        card={selectedCard}
        onClose={closePopup}
        prevCard={handlePrevCard}
        nextCard={handleNextCard}
      >
      </Popup>

      <Footer>
      </Footer>
    </>
  );
}


export default App;
