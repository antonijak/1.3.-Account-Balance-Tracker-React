import React from "react";

const EntrySpan = props => {
  return (
    <span
      id={props.id}
      className={props.className}
      contentEditable="true"
      onFocus={e => {
        e.target.textContent = props.element.description;
      }}
      onBlur={e => {
        e.target.textContent = props.element.description;
      }}
      onKeyDown={e => {
        if (e.key === "Enter") {
          e.preventDefault();
          props.editEntry(
            props.element.id,
            props.data,
            props.arrayName,
            e,
            props.element.description
          );
        }
      }}
      suppressContentEditableWarning="true"
    >
      {props.element.description}
    </span>
  );
};

export default EntrySpan;
