import React from 'react'
import {cardList} from '../Images.js'
import Card from './Card'


export default function Content ({onCardClick}) {
 


  return (
    <main className="content">

      <section className="gallery content__section">
        <h1 className="gallery__heading">Movies</h1>
        <ul className="gallery__list">
          {cardList.map((item, ind) => (
            <Card
              key={item.id}
              card={item}
              title={item.title}
              ind={ind}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}