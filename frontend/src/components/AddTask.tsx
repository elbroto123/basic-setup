import { useState } from "react"

interface Props {
    onAdd: Function
}

const AddTask = ({ onAdd }: Props) => {
    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    // How can I define React.event<Html...> here?
    const onSubmit = (e: any) => {
        e.preventDefault();

        if(!text) {
            alert("Please add a task");
        }
        
        onAdd({ text, day, reminder });

        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" value={String(reminder)} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input className="btn btn-block" type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask
