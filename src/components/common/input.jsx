import React from 'react';
const Input = ({ name, label, value, error, onChange }) => {
    return (
        <div className="form-group">
            <label-group htmlFor={name}>{label}</label-group>
            <input
                value={value}
                onChange={onChange}
                name={name}
                autoFocus
                id={name}
                type="text"
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default Input;