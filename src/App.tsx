import React from 'react';
import * as examples from './6_examples';

const App: React.FC = () => {

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

  return (
    <div className="App">
        <h1>Typescript tutorial app</h1>
        <div>
            <examples.List
                data={ljudi}
                renderOne={(item) => `Ovo je covek zvani ${item.name}, sa id ${item.id}`}
            />
        </div>
    </div>
  );
}

export default App;
