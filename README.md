Feature 1: Create a new card
CreateCard.js
1. Create a form/card component for the input data
    Card Information: Front 
    - img           --> image
    - label>input   --> word
    - label>input   --> hint/phrase
    Card Information: Back 
    - label>input   --> translation
    - label>input   --> explaination/why

    - input btn     --> submit

2. Create the default state for the 
    state = {
        img:(?),
        word:"",
        hint:"",
        translation:"",
        explaination:""
    }

3. Set the functions for the setState inputs
    onChange={(e) => this.setState({ img: e.target.value }
    onChange={(e) => this.setState({ word: e.target.value }
    onChange={(e) => this.setState({ hint: e.target.value }
    onChange={(e) => this.setState({ translation: e.target.value }
    onChange={(e) => this.setState({ explaination: e.target.value }

4. 

