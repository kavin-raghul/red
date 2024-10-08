// src/components/Showdaa.js
import React from 'react';
import './../index.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, filter, insertUser, search, sorting, updaterecord } from './action';

const Showdaa = () => {
    const users = useSelector(state => state.data); 
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteUser());
    };
    const handleinsert = () => {
        dispatch(insertUser());
    };
    const handleUpdate=()=>{
         dispatch(updaterecord())
    }

    const handlesort=()=>{
       dispatch(sorting())
    }

    const handlefilter=()=>{
        dispatch(filter())
    }
    
    const handleSearch=()=>{
        dispatch(search())
    }
    return (
        <div className='data'>
            <div className="values">
                <table>
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <th>Place:</th>
                            <th>Age:</th>
                            <th>Email:</th>
                            <th>Pass:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((e, index) => (
                            <tr key={index}> {/* Added unique key */}
                                <td>{e.name}</td>
                                <td>{e.place}</td>
                                <td>{e.age}</td>
                                <td>{e.email}</td>
                                <td>{e.pass}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr />
            <button onClick={handleDelete}>Delete User</button> {/* Corrected onClick handler */}
            <button onClick={handleinsert}>insert User</button> {/* Corrected onClick handler */}
            <button onClick={handleUpdate}>update record</button>
            <button onClick={handlesort}>To sorting</button>
            <button onClick={handlefilter}>To filter</button>
            <button onClick={handleSearch}>To search</button>
        </div>
    );
}

export default Showdaa;
