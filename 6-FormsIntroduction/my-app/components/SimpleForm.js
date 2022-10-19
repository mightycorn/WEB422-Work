import { useState } from 'react'

export default function SimpleForm() {
    const [ userName, setUserName ] = useState('Home Simpson');

    function submitForm(e) {
        e.preventDefault(); // prevent the browser from automatically submitting the form
        console.log(`form submitted - userName: ${ userName }`);
    }

    return (
        <form onSubmit={ submitForm }>
            User Name: <input value={ userName } onChange={ (e) => setUserName(e.target.value) } />
            <br />
            <br />
            <button type="submit">Update User Name</button>
        </form>
    )
}