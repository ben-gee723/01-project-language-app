import React, { Component } from 'react'


export default class CreateCard extends Component {
    state = {
        img: [],
        word: "",
        hint: "",
        translation: "",
        explanation: "",
        side: true
    }

    addData = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
    }

    render() {
        return (
            <div className="newCard">
                <form className="card" onSubmit={this.addData} >
                    <div className="addedCard">
                        <h3> Add a new card!</h3>
                        <label name="input-item" >Insert word or phrase:</label>
                        <input type="text" name="todo" onChange={(e) => this.setState({ word: e.target.value })} ></input>

                        <label name="input-item" >Insert hint:</label>
                        <input type="text" name="todo" onChange={(e) => this.setState({ hint: e.target.value })} ></input>

                        <label name="input-item" >Insert translation:</label>
                        <input type="text" name="todo" onChange={(e) => this.setState({ translation: e.target.value })} ></input>

                        <label name="input-item" >Further details:</label>
                        <input type="text" name="todo" onChange={(e) => this.setState({ explanation: e.target.value })} ></input>

                        <label name="input-item" >Insert Image:</label>
                        <input className="file" type="file" name="todo" onChange={(e) => this.setState({ img: e.target.value })} ></input>

                        <input className="btn" type="submit" value="ADD CARD" ></input>
                    </div>
                </form>
            </div>
        )
    }
}
