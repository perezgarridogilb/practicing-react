import { useParams } from "react-router-dom";

export default function Profile() {
    const {name} = useParams();
    return (<div>
        <p>Hola {name}</p>
    </div>);
}