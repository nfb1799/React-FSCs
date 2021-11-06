//props = properties
const HelloUser = (props) => {
    return (
        <div>
            Hello {props.username}
            <p>Change Name:</p>
            <input type="text" value={props.username} onChange={handleNameChange} />
        </div>
    );
};

const handleNameChange = (e) => {
    //What to render,
    //Where to render
    ReactDOM.render(
        <HelloUser username={e.target.value} />,
        document.getElementById('app')
    );
};

const init = () => {
    ReactDOM.render(
        <HelloUser username="Nik" />,
        document.getElementById('app')
    );
};

window.onload = init;