const convertTimeStamp = (timestamp) => {
    const num = Number(timestamp) * 1000
    const date = new Date(num)

    const formattedDate = (date.toLocaleString("en-US", { day: "numeric" }) + " " + date.toLocaleString("en-US", { month: "short" }) + " " + date.toLocaleString("en-US", { year: "numeric" }))
    return (formattedDate)
}


export default convertTimeStamp