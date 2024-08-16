const Input = ({name, type, label, placeholder, value, onChange, error}) => {
    return (
        <div>
            <div>{label}</div>
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
            {error ? <div>{error}</div> : null}
        </div>
    )
}

export default Input;