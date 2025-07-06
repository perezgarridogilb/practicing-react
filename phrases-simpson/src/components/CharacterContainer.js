import styled  from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
    debugger;
    const { characters , resApi } = props;
    console.log(characters);
    
    return (
        <div>
            {characters.map((character, index) => (
                <Character  dataCharacter={character} key={index} />
            ))}
        <ContainerButton><button onClick={() => resApi()}>Recargar personajes</button></ContainerButton>    
        
        </div>
    );
};

const ContainerCharacter = styled.div`
    display: flex;
`;

const ContainerButton = styled.div`
  width: 100%;
  text-align: center;
`;
