import React, {Component} from 'react';

class List extends Component{
    render() {
        const numbers = [1,2,3,4,5]
        return (
            <div className="App">
                <h4>Trabajando con listas </h4>
                {numbers.map((number,index) => {
                    return <p key={index}>Soy el numero {number}</p>
                })}
            </div>
        )
    }
}

export default List;