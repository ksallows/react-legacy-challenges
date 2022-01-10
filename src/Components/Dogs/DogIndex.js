import React, { Component } from "react";

export default class DogIndex extends Component {
    constructor() {
        super();
        this.state = { url: 'https://images.dog.ceo/breeds/terrier-toy/n02087046_7245.jpg' }
    }

    newDog = async () => {
        let newUrl;
        await fetch('https://dog.ceo/api/breeds/image/random')
            .then(result => result.json())
            .then(result => newUrl = result.message)
            .catch(console.log('um oops sorry no dog?'))
        this.setState({ url: newUrl })
    }

    render() {
        return (
            <div>
                <img width='400' src={this.state.url} alt='doge' />
                <br />
                <button onClick={this.newDog}>
                    new dog
                </button>
            </div>
        )
    }
}