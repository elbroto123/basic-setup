interface Props {
    backgroundColor?: string,
    text: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ backgroundColor, text, onClick }: Props) => {
    return (
        <button
            className="btn" 
            style={{ backgroundColor: backgroundColor }}
            onClick={onClick}>
                {text}
        </button>
    )
}

Button.defaultProps = {
    backgroundColor: "steelblue" 
}

export default Button
