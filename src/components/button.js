const Button = (props) => {
    const {children, onClick} = props;

    const onClickHandler = () => {
        onClick();
    }
    return (
        <button onClick={onClickHandler}>{children}</button>
    )
}

export default Button;