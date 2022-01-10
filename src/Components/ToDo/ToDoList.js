import React, { Component } from 'react';

export default class ToDoList extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            list: [
                ['add something to the list', false]
            ]
        }
    }

    inputChange = (event) => {
        this.setState({ input: event.target.value })
    }

    addToList = () => {
        let newList = this.state.list;
        newList.push([this.state.input, false])
        this.setState({ list: newList })
    }

    checkBox = (index) => {
        let newList = this.state.list;
        newList[index][1] = !newList[index][1]
        this.setState({ list: newList })
    }

    componentDidUpdate() {
        console.log(this.state.list)
    }

    render() {
        return (
            <div>
                <input onChange={this.inputChange} />
                <button onClick={this.addToList}>add</button>
                <ul>
                    {this.state.list.map((item, index) =>
                        <div>
                            <li key={index}>
                                <input onChange={() => this.checkBox(index)} type='checkbox' checked={item[1] ? true : false} />
                                <span style={{ display: 'inline-block', width: '20px' }}></span>
                                {!item[1] ? item[0] : <span style={{ textDecoration: 'line-through' }}>{item}</span>}
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}