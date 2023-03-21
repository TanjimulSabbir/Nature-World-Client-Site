import React from 'react';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Page = ({ AllData, setCurrentPage, ProductPerPage, CurrentPage }) => {

    const Page = Math.ceil(AllData?.length / ProductPerPage);

    let PageNumber = [];

    for (let i = 1; i <= Page;) {
        PageNumber.push(i)
        i++
    }
    return (
        <div className='flex justify-center items-center py-10 space-x-2'>
            <GrFormPrevious />
            {
                PageNumber.map(page => {
                    return (
                        <div>
                            <button onClick={() => setCurrentPage(page)}
                                className={`btn btn-xs btn-active bg-green-600 ${page === CurrentPage ? "bg-red-600" : ""}`}> {page}
                            </button>
                        </div>
                    )
                })
            }
            <GrFormNext />
        </div>
    );
};

export default Page;