import React from 'react';
import 'styles/App.scss';
import TodoList from 'Components/TodoList/TodoList';
import { Link, Route, Routes, useLocation } from 'react-router-dom';

function App() {
    const {pathname} = useLocation();
    const route = pathname.slice(1);

    return (
        <div className="App">
            <header>
                <Link className={route === '' ? 'active' : ""} to="">Всі</Link>
                <Link className={route === 'remove' ? 'active' : ""} to="remove">Видалені</Link>
            </header>
            <Routes>
                <Route path='' exact={true} element={<TodoList />} />
                <Route path='/remove' exact={true} element={<TodoList remove={true} />} />
            </Routes>
        </div>
    );
}

export default App;
