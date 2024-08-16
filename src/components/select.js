const Select = ({type, label, placeholder, value, onChange, error}) => {
    return (
        <div>
            <div>{label}</div>
            <select>

            </select>
            {error ? <div>{error}</div> : null}
        </div>
    )
}

export default Select;