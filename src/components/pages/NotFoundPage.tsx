import { NavLink } from 'react-router-dom';

function NotFoundPage() {
    return (
        <>
            <h2>ERROR</h2>
            <NavLink to={'/'}>GO HOME</NavLink>
        </>
    )
}

export default NotFoundPage;
