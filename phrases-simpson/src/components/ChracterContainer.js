import styled  from "styled-components";
import Character from "./Character";

export default function ChracterContainer(props) {
    const { characters, reqApi } = props;
    console.log(characters);
    
    return (
        <div>
            {characters.map((character, index) => (
                <Character  dataCharacter={character} key={index} />
            ))}
            <p>
                Estamos dentro de character
                {/* <Character /> */}
            </p>
        </div>
    );
};

const ContainerCharacter = styled.div`
    display: flex;
`;
