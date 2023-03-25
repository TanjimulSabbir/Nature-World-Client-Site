import axios from 'axios';
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthContext } from '../../AuthContext/AuthProvider';
import auth from '../../Firebase/Firebase.init.config';

const JwtRoute = () => {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext)

    if (user) {
        axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
        const res = axios.get(`https://nature-world-server-site-tanjimulsabbir.vercel.app/${user?.email}`)
        if (res.status !== 200) {
            return UserSignOut()
        }
    }
}

export default JwtRoute;