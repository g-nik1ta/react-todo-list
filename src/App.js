import React from 'react';
import 'styles/App.scss';
import MarksList from 'Components/MarksList/MarksList';

function App() {
    return (
        <div className="App">
            <header>
                <MarksList />
            </header>
        </div>
    );
}

export default App;
