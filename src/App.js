import React, { Component } from 'react'
import './02-css/App.scss';
import CreateCard from './01-features/CreateCard';
// import './03-images/pomme.jpg'


export default class App extends Component {
  state = {
    cardsStorage: [
      { id: 0, word: "Apple", hint: 'feminim gender fruit', translation: "la pomme", explanation: "J'ai une pomme que je mange.", side: true, img: '/03-images/pomme.jpg' }
    ]
  }


  addItem = (value) => {
    console.log(value)
    let item = {
      id: this.state.cardsStorage.length, word: value.word, hint: value.hint, translation: value.translation, explanation: value.explanation, side: true, img: value.img
    }
    let copystate = [...this.state.cardsStorage]
    copystate.push(item)
    this.setState({
      cardsStorage: copystate
    })

  }

  updateItem = (id) => {
    let updateItems = this.state.cardsStorage.map(item => {
      if (item.id === id) {
        item.side = !item.side;
        return item
      } else {
        return item
      }
    })
    this.setState({
      cardsStorage: updateItems
    })
  }

  deleteItem = (id) => {
    let toDelete = [...this.state.cardsStorage]
    let deletedItems = toDelete.filter(item => item.id !== id)
    console.log("Clicked Delete")
    this.setState({
      cardsStorage: deletedItems
    })
  }


  render() {
    return (
      <div className="App" >
        <div className="body">
          <h1>French Palm Cards</h1>
          <div className="main">
            {this.state.cardsStorage.map(card => {
              return (
                <div className="newCard" key={card.id} >
                  {card.side
                    ? <div className="card">
                      <h3>{card.word}</h3>
                      <div className="addedCard">
                        <label name="picture">Picture:</label>
                        <div>
                          {card.img
                            ? <img alt={card.id} src={card.img} ></img>
                            : <img src='https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg' alt="this-is-not-found" ></img>}
                        </div>
                        <label name="hint">Hint:</label>
                        <p name="hint" id="hint">{card.hint}</p>
                        <div className="btns">
                          <input className="btn" type="submit" value="FLIP CARD" onClick={() => { this.updateItem(card.id) }} ></input>
                          <input className="btn" type="submit" value="DELETE" onClick={() => { this.deleteItem(card.id) }} ></input>
                        </div>
                      </div>
                    </div>
                    : <div className="card">
                      <h3>{card.word}</h3>
                      <div className="addedCard">
                        <label name="explanation">Further details:</label>
                        <p name="explanation" id="explanation">{card.explanation}</p>
                        <label name="translation">Translation:</label>
                        <p name="translation" id="translation">{card.translation}</p>
                        <div className="btns">
                          <input className="btn" type="submit" value="FLIP CARD" onClick={() => { this.updateItem(card.id) }} ></input>
                          <input className="btn" type="submit" value="DELETE" onClick={() => { this.deleteItem(card.id) }} ></input>
                        </div>
                      </div>
                    </div>
                  }
                </div>
              )
            })}
            <CreateCard addItem={this.addItem} />
          </div>

        </div>
      </div>
    );
  }
}
