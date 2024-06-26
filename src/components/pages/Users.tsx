import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '@/store/actions/users';

function Users() {

    const usersList = useSelector((state) => state.users.usersList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
        console.log(usersList);
    }, [])

    return (
        <>
            <h1>Users</h1>
            <ol>
            {usersList && usersList.map((user) => {
                return (
                    <li>{user.name} <Link to={`/user/${user.id}`} state={user.id}> GO TO USER </Link></li>
                )
            })}
            </ol>
        </>
    )
}

export default Users;
