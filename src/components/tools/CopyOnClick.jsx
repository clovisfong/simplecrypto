const CopyOnClick = (data) => () => {
    navigator.clipboard.writeText(data)
}


export default CopyOnClick