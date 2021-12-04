import React from 'react';

const InputWithLabel = ({children,isFocused,todoTitle,handleTitleChange}) =>{
    const inputRef = React.useRef();

    React.useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input id="todoTitle" type="text" name="title" ref={inputRef} value={todoTitle} onChange={handleTitleChange}/>
        </>
    ); 
};

export default InputWithLabel;