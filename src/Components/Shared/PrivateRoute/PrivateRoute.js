import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init.config';

const PrivateRoute = ({ children }) => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from.pathname || "/"
    if (user) {
        return navigate(from, { replace: true })
    }
    else {
        return navigate("/login")
    }
};

export default PrivateRoute;