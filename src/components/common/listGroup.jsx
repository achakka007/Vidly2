import React from 'react';
// import _ from "lodash";
// import PropTypes from "prop-types"

const ListGroup = ({items, textProperty, valueProperty, onItemSelect, selectedItem}) => {
    return (
        <ul className="list-group">
            {items.map(item => 
                <li
                    onClick={() => onItemSelect(item)}
                    key={item[valueProperty]}
                    className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                >
                    {item[textProperty]}
                </li>
            )}
        </ul>
    );
}

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
 
export default ListGroup;