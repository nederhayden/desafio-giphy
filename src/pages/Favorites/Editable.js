import React, { useState, useRef, useEffect } from "react";

export default function EditableTitle({ value, onChange }) {
  const [editable, setEditable] = useState(false);
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onChange(inputRef.current.value);
    setEditable(false);
  }
  useEffect(() => {
    if (!editable) return;

    inputRef.current.value = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editable]);

  return editable ? (
    <form onSubmit={handleSubmit}>
      <input
        className="text-xl fw-600"
        ref={inputRef}
        autoFocus
        onBlur={() => setEditable(false)}
      />
      <button className="hidden-button" type="submit"></button>
    </form>
  ) : (
    <div className="editable-title">
      <strong className="text-xl" onClick={() => setEditable(true)}>
        {value}
      </strong>
      <button
        onClick={() => setEditable(true)}
      >Editar</button>
    </div>
  );
}
