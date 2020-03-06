import React from 'react'
import Person from './person.component'

const NameList = () => {
    const persons = [
        {
            name: 'Name1',
            age: 10,
            sth: 'Sth1'

        },
        {
            name: 'Name2',
            age: 20,
            sth: 'Sth2'

        }
    ]

    const personList = persons.map(person => (
        <Person person={person}></Person>
    ))
    return (
        <div>
            {personList}          
        </div>
    )
}

export default NameList;
