import axios from 'axios';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../../AuthContext/AuthProvider';
import auth from '../../Firebase/Firebase.init.config';

const JwtRoute = ({ children }) => {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext)

    if (user) {
        axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        const res = axios.get(`http://localhost:5000/home/${user?.email}`)


        if (res.status === 200) {
            console.log(res)
            return children;
        }
        if (res.status !== 200) {
            return UserSignOut()
        }
    }

    if (!user) {
        return children;
    }

}


export default JwtRoute;