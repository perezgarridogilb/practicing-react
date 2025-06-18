import { useState } from "react";
import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { v4 as uuidv4 } from 'uuid';

const options = [
    { key: "deporte", text: "Deporte", value: "deporte" },
    { key: "casa", text: "Casa", value: "casa" },
    { key: "oficina", text: "Oficina", value: "oficina" },
    { key: "otra", text: "Otra", value: "otra" },
]


export default function InputTask(props) {
    const [task, setTask] = useState({
        idTask: "",
        taskName: "",
        categoryTask: ""
    });

    const onChangeTask = (e, data) => {
        console.log("Tocando onChangeTask");
        debugger;
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
        
    };

    const onChangeCategoryTask = (e, data) => {
        
        setTask({
            ...task,
            [data.name]: data.value,
        })
        console.log(task);
    };

    const onSubmitTask = (e) => {
        // que no recargue la página
        e.preventDefault();
        console.log('enviando tarea');

        // validación
        if (task.taskName.trim() === '' && task.categoryTask.trim() === '') {
            setError(true);
            return;
        }

        // eliminar el msj previo
        setError(false);

        // asignar un ID
        const id = uuidv4();
        task.idTask = id;
        console.log(id);

        // crear la tarea
        createTask(task);

        // limpiar los inputs
        setTask({
            idTask: "",
            taskName: "",
            categoryTask: ""
        })
    }
    
    const [error, setError] = useState(false);

    const { createTask } = props;

    return (<>
        <Grid centered columns={2}>
            <Input type="small"
                icon="add"
                placeholder="Escribe tu tarea..."
                iconPosition="left"
                name="taskName"
                value={task.taskName}
                onChange={onChangeTask}
            />
            <Select
                compact
                options={options}
                className="select-form-task"
                name="categoryTask"
                placeholder="Categoria"
                value={task.categoryTask}
                onChange={onChangeCategoryTask}
            />
            <Button type="submit" color="violet" onClick={onSubmitTask}>
                Añadir
            </Button>
        </Grid>
        {error && (
            <Grid centered>
                <Header as="h4" color="red" className="alert-error-form">
                    <Icon name="close" />
                    <Header.Content>La tarea es obligatoria</Header.Content>
                    <Icon name="close" />
                </Header>
            </Grid>
        )}
    </>
    );
};
