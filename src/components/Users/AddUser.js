import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUserName, enteredAge)
        setEnteredUserName('')
        setEnteredAge('')
    }
    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input type="text" value={enteredUserName} id="username" onChange={usernameChangeHandler} />
                <label htmlFor='username'>Age (Years)</label>
                <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>)
};

export default AddUser;