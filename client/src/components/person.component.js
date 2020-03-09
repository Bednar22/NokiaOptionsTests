import React from 'react'

const Person = ({person}) => {
    return (
        <div>
                <h2>Name: {person.name} Age:{person.age} Sth: {person.sth}</h2>
                
        </div>
    )
}

export default Person;
