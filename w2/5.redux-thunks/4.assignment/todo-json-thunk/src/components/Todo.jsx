import React from 'react'
import AddTodo from './AddTodo';
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { deleteTodo, getTodos } from '../Redux/todo.action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Todo = () => {
    const todos = useSelector((store) => store.todoManager.todos);
    const dispatch = useDispatch()
    // console.log(todos);
    const handleDelete=(id)=>{
        dispatch(deleteTodo(id));
        dispatch(getTodos())
    }
    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])
    return (
        <div>
            <AddTodo />
            {/* <TodoItem/> */}
            <div className='table'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>S.I NO.</TableCell>
                                <TableCell align="center">Todos</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Change status</TableCell>
                                <TableCell align="center">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {todos?.map((todo) => (
                                <TableRow
                                    key={todo.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {todo.id}
                                    </TableCell>
                                    <TableCell align="center">{todo.title}</TableCell>
                                    <TableCell align="center">{todo.status?"Completed":"Pending"}</TableCell>
                                    <TableCell align="center"><Button variant="outlined">Toggle</Button></TableCell>
                                    <TableCell align="center">  <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>handleDelete(todo.id)}>
                                        Delete
                                    </Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Todo