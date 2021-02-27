import { useLocation } from "react-router-dom"
import Button from "./Button"

interface Props {
    // Question mark makes this field optional
    title?: string
    onAdd: (event: React.MouseEvent<HTMLButtonElement>) => void,
    showAdd: boolean
}

const Header = ({ title, onAdd, showAdd }: Props) => {
    const location = useLocation();

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && (<Button backgroundColor={showAdd ? "Red": "Green"} text={showAdd ? "Close": "Add"} onClick={onAdd}></Button>)}
        </header>
    )
}

// Default values for props
Header.defaultProps = {
    title: "Task Tracker"
}

// CSS for JS use like this style={ headingStyle }
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header
