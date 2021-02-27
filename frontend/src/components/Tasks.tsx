import Task from "./Task"
import { TaskDefinition } from "../ObjectDefinitions/TaskDefinition"

interface Props {
    tasks: Array<TaskDefinition>,
    onDelete: Function,
    onToggle: Function 
}

const Tasks = ({ tasks, onDelete, onToggle }: Props) => {

    return (
        <>
            {tasks.map((task) => {
                return <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            })}
        </>
    )
}

export default Tasks
