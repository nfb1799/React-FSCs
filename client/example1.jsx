//React components have to start with capital
//FSC - Functional Stateless Component
const HelloWorld = () => {
    return(
        <div>
            Hello World!
        </div>
    );
};

const init = () => {
    ReactDOM.render(<HelloWorld />, document.getElementById('app'));
};

window.onload = init;