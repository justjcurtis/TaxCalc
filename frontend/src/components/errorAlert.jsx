const ErrorAlert = ({ error }) => {
    return (
        <div className="alert alert-error">
            <div className="flex-1">
                <label>{error}</label>
            </div>
        </div>
    )
}

export default ErrorAlert
