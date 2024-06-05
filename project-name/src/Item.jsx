const Item = ({name}) => {  // name 대신 props
    return(
        <p style={{color: "blue"}}>{name}</p> // props.name 으로 해도 됨.
    )
}

export default Item;