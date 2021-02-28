import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { IBug } from "../../interfaces/IBug"
import { useEffect, useState } from "react"

interface Props {
    clickedBug: IBug,
    updateBug: Function,
    deleteBug: Function
}

const BugDetailsForm = ({ clickedBug, updateBug, deleteBug }: Props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    // TODO how to set the state from the passed props here? Infinite loop if I just call setName(clickedBug.name)
    const saveEditedBug = () => {
        const bug: IBug = {
            id: -1,
            name,
            description
        }
        updateBug(bug);
    }

    return (
        <>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <Button variant="contained" color="primary" onClick={saveEditedBug}>Save</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteBug()}>Delete</Button>
            </form> 
        </>
    )
}

export default BugDetailsForm
