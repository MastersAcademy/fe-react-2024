import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '@/store/actions/users';

function User() {

    const { id } = useParams();
    const userDetails = useSelector((state) => state.users.userDetails);
    const dispatch = useDispatch();


    useEffect(() => {
       dispatch(getUserDetails(id))
    }, [])

    return (
        <>
            <h1>User</h1>
            {userDetails && <span>Name: {userDetails.name}</span>}
        </>
    )
}

export default User;
