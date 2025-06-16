import { Header as Head, Icon } from "semantic-ui-react";

export default function Header(params) {
return (
        <div className="header">
            <Head as='h1' icon textAlign="center" color="violet">
        <Icon inverted color='violet' name='list alternate outline' square="true"/>
        <Head.Content>Listado de tareas</Head.Content>
    </Head>
        </div>
)
};
