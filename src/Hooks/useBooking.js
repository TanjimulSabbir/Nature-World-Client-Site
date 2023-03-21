import axios from 'axios';
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { AuthContext } from '../Components/AuthContext/AuthProvider';
import auth from '../Firebase/Firebase.init.config';


const useBooking = () => {
    const [user] = useAuthState(auth);
    const { UserSignOut } = useContext(AuthContext)
    const { data: AllBooking = [], isLoading, refetch, isError } = useQuery({
        queryKey: ['BookingData',],
        queryFn: async () => {
            try {
                if (user) {
                    axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                    const response = await axios.get(`http://localhost:5000/booking/${user.email}`)
                    return response.data.data
                }
            } catch (error) {
                const errorStatus = [401, 403].includes(error.response.data.status);
                if (errorStatus) {
                    UserSignOut()
                }
                else { toast.error(error.response.data.status) }
            }
        }
    })

    return [AllBooking, isLoading, isError, refetch]
}

export default useBooking;