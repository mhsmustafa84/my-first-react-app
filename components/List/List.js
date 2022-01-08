/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './List.css';

export default function List() {


    const [inputVal, setInputVal] = useState({
        val: '',
        isDone: false,
        edit: false,
        id: 0
    });

    const [list, setList] = useState([]);
    let [isExist, setIsExist] = useState(false);
    let [isEdit, setIsEdit] = useState(false);

    const getVal = (e) => {
        if (isEdit) {
            setInputVal({
                ...inputVal,
                val: e.target.value,
            })
        } else {
            setInputVal({
                ...inputVal,
                val: e.target.value,
                id: Math.floor(Math.random() * 50000000)
            })
        }
    }

    const add = (id) => {
        isExist = false;
        setIsExist(isExist);
        list.forEach((item, index) => {
            if (item.val === inputVal.val) {
                isExist = true
                setIsExist(isExist);
            }
            if (item.id === id) {
                list[index] = {
                    ...list[index],
                    val: inputVal.val,
                    edit: false
                }
                setList([...list]);
                setInputVal({
                    val: '',
                    isDone: false,
                    id: 0
                })
            }
        })
        if (!isExist && inputVal.val && !isEdit) {
            list.push({
                ...inputVal,
                val: inputVal.val,
                isDone: inputVal.isDone,
            })
            setList([...list]);
            setInputVal({
                val: '',
                isDone: false,
                edit: false,
                id: 0
            })
        }
        isEdit = false;
        setIsEdit(isEdit);
    }

    const Delete = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }

    const Done = (e, index) => {
        if (e.target.textContent === 'Done') {
            list[index].isDone = true;
            setList([...list]);
        } else {
            list[index].isDone = false;
            setList([...list]);
        }
    }

    const Edit = (index) => {
        isEdit = true;
        setIsEdit(isEdit);
        list.forEach((item, ind) => {
            if (ind === index) {
                item.edit = true;
                setInputVal({
                    val: item.val,
                    isDone: item.isDone,
                    edit: true,
                    id: item.id
                })
            }
        })
    }

    return (

        <>

            <h1>To Do List</h1>
            <div className="w-25 mx-auto mt-5">
                <input className="form-control my-3" value={inputVal.val === "" ? "" : inputVal.val} onChange={getVal} />
                <button className="btn btn-primary w-100" onClick={() => add(inputVal.id)}>Add</button>
                <p className={isExist ? 'd-block mt-5 text-center alert-danger py-3' : 'd-none'}>This Item was Added before</p>
            </div>
            <div className="w-50 mx-auto mt-5">
                {list.map((item, index) =>
                    <div className={`border my-2 p-4 d-flex justify-content-between ${item.edit && 'border-warning'}`} key={index}>
                        <h5 className={item.isDone ? 'line' : ''}>{item.val}</h5>
                        <div>
                            <button className="btn btn-success" onClick={(e) => Done(e, index)}>{item.isDone ? 'Undo' : 'Done'}</button>
                            <button className="btn btn-warning mx-4" onClick={() => Edit(index)}>Edit</button>
                            <button className="btn btn-danger" onClick={() => Delete(index)}>Delete</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
