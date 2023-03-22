import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init.config';

const AdminRoute = ({ children }) => {
    const [user] = useAuthState(auth)
    const AdminUser = ["tanjimulislamsabbir02@gmail.com", "tanzimulislamsabbir@gmail.com"]
    const navigate = useNavigate()

    if (AdminUser.includes(user.email)) {
        return children;
    }
    else {
        navigate("/login")
    }
};

export default AdminRoute;