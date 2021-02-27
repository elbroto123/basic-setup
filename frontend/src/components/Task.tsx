import Button from "./Button"
import { TaskDefinition } from "../ObjectDefinitions/TaskDefinition"

interface Props {
    task: TaskDefinition,
    onDelete: Function,
    onToggle: Function
}

const Task = ({ task, onDelete, onToggle }: Props) => {    
    const onClick = () => {
        onDelete(task.id);
    }

    const onDoubleClick = () => {
        onToggle(task.id);
    }

    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={onDoubleClick} >
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button onClick={onClick} text="Delete" backgroundColor="red"></Button>
        </div>
    )
}

export default Task
