import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '@/components/pages/Home';
import Users from '@/components/pages/Users';
import NotFoundPage from '@/components/pages/NotFoundPage';
import User from '@/components/pages/User';
import LayoutComponent from '@/components/LayoutComponent/LayoutComponent';
import { useEffect } from 'react';

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<LayoutComponent/>}>
                <Route index element={<Home/>} />
                <Route path={'users'} element={<Users />} />
                <Route path={'user/:id'} element={<User />} />
                <Route path={'*'} element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
