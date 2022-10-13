import React, { useState, useEffect } from 'react'
import data from './data';
import Button from 'react-bootstrap/Button';
import 'react-bootstrap'

const url = "https://api.github.com/users";

const Task2 = () => {
    const [list, setList] = useState(data);
    const [task, setTask] = useState(false);
    const [users, setusers] = useState([]);

    const getUsers = async () => {
        const Fetch = await fetch(url);
        const res = await Fetch.json();
        setusers(res);
    }

    const removeData = (id) => {
        let newList = list.filter((person) => person.id !== id);
        setList(newList);
    };

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <Button onClick={() => setTask(!task)} as='input' type="submit" value="onclick" />{''}
            {task && users.map((per) => {
                const { id, login, avatar_url, url } = per;
                return (
                    <div key={id}>
                        <img src={avatar_url} alt={login} />
                        <h2>{login}</h2>
                        <a href={url} >Find More about Me...</a>
                        <br></br>
                    </div>
                )
            })}

            {!task && list.map((person) => {

                const { id, name } = person;

                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <Button onClick={() => removeData(id)} as='input' type='button' value='Remove' />

                    </div>
                )


            })}

        </>
    )

}

export default Task2;


