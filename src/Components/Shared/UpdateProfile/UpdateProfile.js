import React, { useContext, useState } from 'react'
import { useAuthState, useDeleteUser, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DBContext } from '../../DataBaseContext/UserDBProvider';
import auth from '../../Firebase/Firebase.init.config';
import PageLoading from '../Loading/Loading';
import ModalUpdatePassword from './ModalUpdatePassword';

function UpdateProfile() {
    const [updateProfile, updatingLoading, UpdatinError] = useUpdateProfile(auth);
    const [deleteUser, DeleteLoading, DeleteError] = useDeleteUser(auth);
    const [sendEmailVerification, sending, VarificationError] = useSendEmailVerification(auth);
    const { UpdateDBUser } = useContext(DBContext);

    const [isOpen, setIsOpen] = useState(false)
    const [lastClick, setLastClick] = useState(0);
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleUpdate = async (event) => {
        event.preventDefault();
        const email = event.target.email.value.trim();
        const name = event.target.name.value.trim();
        const url = event.target.url.value.trim();

        if (!(name && email && url)) {
            return toast('Provide Valid Input')
        }
        const ReservedUser = ['tanjimulislamsabbir02@gmail.com', 'tanzimulislamsabbir@gmail.com']
        if (ReservedUser.includes(user?.email)) {
            return toast("You can't Update this user Profile")
        }
        try {
            const res = await updateProfile({ displayName: name, photoURL: url });
            if (res) {
                await UpdateDBUser({ name, photoURL: url })
                toast.success("Updated Succesfully")
                return navigate(from, { replace: true })
            }
        }
        catch (err) {
            toast.error("Failed to update profile")
        }
    }

    const handleDelete = () => {
        const ConfirmDelete = window.confirm('Do you want to Delete your Account?')
        if (!ConfirmDelete) {
            return toast("Welcome to Come Back!😍")
        }
        const ReservedUser = ['tanjimulislamsabbir02@gmail.com', 'tanzimulislamsabbir@gmail.com']
        if (ReservedUser.includes(user?.email)) {
            return toast("You can't Delete this user Profile")
        }
        try {
            async function DeletingUser() {
                const res = await deleteUser()
                if (res) {
                    toast.success('User Deleted Successfully')
                    navigate('/login')
                }
            }
            DeletingUser()
        } catch (err) {
            toast.error(err.message)
        }
    }

    const handleVerification = async () => {
        const res = await sendEmailVerification()
        if (res) {
            toast.success('Verification Email Sent')
            const now = Date.now();
            const timeSinceLastClick = now - lastClick;
            if (timeSinceLastClick >= 4 * 1000) {
                setLastClick(now);

            }
        }
    }
    if (updatingLoading) {
        return <PageLoading></PageLoading>
    }
    if (sending) {
        return <PageLoading></PageLoading>
    }
    if (DeleteLoading) {
        return <PageLoading></PageLoading>
    }
    UpdatinError && toast.error(UpdatinError.message);
    DeleteError && toast.error(DeleteError.message);
    VarificationError && toast.error(VarificationError.message);


    const style = 'btn w-full border-none p-2 rounded text-black'
    return (
        <div className='py-14 Bg-light-green border-b border-[#c0f6c0]'>
            <div className='flex flex-col-reverse justify-center items-center'>
                <div className='w-full mt-16'>
                    <div className='flex flex-col space-y-3 items-center justify-center'>
                        <p onClick={handleVerification}
                            disabled={Date.now() - lastClick < 4 * 1000} className="Btn-Primary w-72">
                            Send Email Verification</p>

                        <p className={``}>
                            <label htmlFor="my-modal-6" className='Btn-Primary w-72' onClick={() => setIsOpen(true)}>Update Password</label>
                        </p>

                        <p onClick={handleDelete} className="Btn-Primary w-72 bg-red-600 border-red-600">
                            Detele Account</p>
                    </div>
                </div>
                <form onSubmit={handleUpdate} className="w-full p-6 max-w-sm sm:max-w-md shadow-lg rounded-lg">
                    <div>
                        <h1 className='font-displayFair text-black text-3xl text-center'>
                            Update Profile</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder={user && (user?.emailVerified
                                ? "Your email is verified" : "Verify Your Email Address.") || 'No User'} className="input input-bordered Bg-light-green" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input name='name' type="text"
                                placeholder={user ? user.displayName : "User Name"} className="input input-bordered Bg-light-green" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input name='url' type="url" placeholder={(user && (user?.photoURL ? "Set URL" : "You Have Not Yet Uploaded Profile Photo.") || 'No User')} className="input input-bordered Bg-light-green" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' disabled={user ? false : true} className="btn btn-primary">Update Profile</button>
                        </div>
                    </div>
                </form>
            </div>
            {isOpen && <ModalUpdatePassword></ModalUpdatePassword>}
        </div>
    )
}

export default UpdateProfile