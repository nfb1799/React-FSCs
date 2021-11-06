const SongContainer = (props) => {
    if(props.songs.length === 0) {
        return (
            <div>
                <h3>No Songs Yet!</h3>
            </div>
        );
    }

    const songList = props.songs.map((song) => {
        return (
            <div>
                <h2>{song.artist} - <i>{song.title}</i></h2>
            </div>
        );
    });

    return (
        <div>
            <h1>My favorite songs!</h1>
            {songList}
        </div>
    );
};

const init = () => {
    ReactDOM.render(
        <SongContainer songs={[]} />,
        document.getElementById('app')
    );

    loadSongsFromServer();
};

const loadSongsFromServer = () => {
    const xhr = new XMLHttpRequest();

    const setSongs = () => {
        const songResponse = JSON.parse(xhr.response);

        ReactDOM.render(
            <SongContainer songs={songResponse} />,
            document.getElementById('app')
        );
    };

    xhr.onload = setSongs;
    xhr.open('GET', '/getSongs');
    xhr.send();
};

window.onload = init;