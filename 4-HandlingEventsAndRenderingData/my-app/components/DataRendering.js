import { useState } from 'react';

export default function DataRendering() {
    const [users, setUsers] = useState([
        { user: 'fred', active: false, age: 40 },
        { user: 'pebbles', active: false, age: 1 },
        { user: 'barney', active: true, age: 36 },
    ]);

    return (
        <>
            {/* "If Statement" */}
            <strong>User: {users[0].user}</strong> - {users[0].active && <em>is Active</em>} <br />

            {/* "If / Else Statement" */}
            <strong>User: {users[2].user}</strong> - {users[2].active ? <em>Active</em> : <em>Inactive</em>} <br />

            {/* "Looping Statement" */}
            <table className="borderOne">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Active</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{users.user}</td>
                            <td>{users.active ? "true" : "false"}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}