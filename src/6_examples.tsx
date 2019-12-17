import React from 'react';
// obicna compo + interface

type ListProps<T> = {
    data: T[]
    renderOne?: (item: T) => null
}

type ListState<T> = {
    data: T[]
}

class List<T extends {id: number}> extends React.Component<ListProps<T>, ListState<T>> {
    state = {
        data: []
    }
    render() {
        return (
            <ul>
                {
                    this.state.data.map((item: T) => <li key={item.id}>{this.props.renderOne?this.props.renderOne(item):item.id}</li>)
                }
            </ul>
        )
    }
}

let ljudi = [
    {
        id: 0,
        name: "Dragan"
    }, {
        id: 1,
    name: "Pera"
    }, {
        id: 2,
        name: "djura"
    }
]
// const jsx = <List data={ljudi} />

// function ListFn<T>() {}

// HOMEWORK!!