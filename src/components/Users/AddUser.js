import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUserName, setEnteredUserName] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please ente a valid name and age (non empty value)'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please ente a valid age'
            })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('')
        setEnteredAge('')
    }
    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input type="text" value={enteredUserName} id="username" onChange={usernameChangeHandler} />
                    <label htmlFor='username'>Age (Years)</label>
                    <input type="number" value={enteredAge} id="age" onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>

            </Card>
        </div>
    )
};

export default AddUser;