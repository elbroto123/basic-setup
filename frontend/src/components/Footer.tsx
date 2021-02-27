import { Link } from "react-router-dom"

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
