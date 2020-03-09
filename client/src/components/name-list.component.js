import React from 'react'
import Person from './person.component'

const NameList = () => {
    const persons = [
        {
            id: 1,
            name: 'Name1',
            age: 10,
            sth: 'Sth1'

        },
        {
            id: 2,
            name: 'Name2',
            age: 20,
            sth: 'Sth2'

        }
    ]

    const personList = persons.map(person => (
        <Person key={person.id} person={person}></Person>
    ))
    return (
        <div>
            {personList}          
        </div>
    )
}

export default NameList;
