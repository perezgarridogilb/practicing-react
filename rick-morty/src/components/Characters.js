export default function Character(props) {
    const characters = props.character;
    const setCharacters = props.setCharacters;

    const resetCharacters = () => {
        console.log('Reseteando...');
        setCharacters(null);
        
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <h1 className="back-home" onClick={resetCharacters}>Volver a la home</h1>
            <div className="container-characters">

            {characters && characters.map((character, index) => (
            <div className="character-container" key={index}>
                <div>
                    <img src={character.image} alt={character.name}/>
                </div>
                <h3>{character.name}</h3>
                <h6>
                    {character.status === "Alive" ? (
                        <>
                        <span className="alive"/>
                        Alive
                        </>
                    ) : (
                        <>
                            <span className="dead"/>
                            Dead
                        </>
                    )}
                </h6>
                <p> 
                    <br />
                    <span className="text-grey">Episodios: </span>
                    <span >{character.episode.length} </span>
                </p>
                <p>
                    <span className="text-grey">Episodios: </span>
                    <span >{character.episode.length} </span>
                </p>
            </div>
            ))}

            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
        </div>
    )
}