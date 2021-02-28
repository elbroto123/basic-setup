import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { IBug } from "../../interfaces/IBug"
import { useState } from "react"

interface Props {
    addBug: Function
}

const BugAddForm = ({ addBug }: Props) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const prepAddBug = () => {
        const bug: IBug = {
            id: -1,
            name,
            description
        }

        addBug(bug);
    }

    return (
        <>
            <form noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
                <TextField id="outlined-basic" label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)}/>
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
                <Button variant="contained" color="primary" onClick={prepAddBug}>Save</Button>
            </form> 
        </>
    )
}

export default BugAddForm
