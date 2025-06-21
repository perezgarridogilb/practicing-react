import { Header, Icon, Grid } from "semantic-ui-react";
import Task from "./Task";

export default function TaskContent(props) {
    const { tasks } = props;

    if (tasks.length === 0) {
        return null;
    }
    return (<Grid className="tasks-content">
        <Header as='h2' icon textAlign="center">
            <Icon name="settings" />
            Administrar tareas
        </Header>
        <Grid.Row>
            {tasks.map((task, index) => (
                <Task task={task}/>
                ))}
        </Grid.Row>
    </Grid>);
};
