import React from 'react';
// obicna compo + interface

type ListProps<T> = {
    data: T[]
    renderOne?: (item: T) => React.ReactNode
}

type ListState<T> = {
    data: T[]
}

export class List<T extends {id: number}> extends React.Component<ListProps<T>, ListState<T>> {
    state = {
        data: []
    }
    componentWillMount() {
        this.setState({
            ...this.props
        })
    }
    render() {
        return (
            <>
                <div>Lista:</div>
                <ul>
                    {
                        this.state.data.map((item: T) => <li key={item.id}>{this.props.renderOne?this.props.renderOne(item):item.id}</li>)
                    }
                </ul>
            </>
        )
    }
}

// HOMEWORK!!