function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if (user) {
        return <p>Hello, {formatName(user)}!</p>;
    }

    return <p>Hello, Stranger.</p>
}

export default function Hello(props) {
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    // const element = <div tabIndex="0"></div>;
    const element = <img src={user?.avatarUrl} />;

    return (
        <p>
            Hello {props.fName} {props.lName}!
        </p>
    );
}

Hello.defaultProps = {
    fName: 'First Name',
    lName: 'Last Name'
}