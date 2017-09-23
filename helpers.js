
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

function unixToNatural(unix) {
    const date = new Date(unix*1000)
    const monthName =  months[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()
    return `${monthName} ${day}, ${year}`
}

function naturalToUnix(natural) {
    const dateArr =  natural.split(' ')
    dateArr[0] = months.indexOf(dateArr[0]) + 1
    const naturalDate = `${dateArr[2]}/${dateArr[0]}/${dateArr[1].slice(0,2)}`
    return (new Date(naturalDate)).getTime() / 1000
}

module.exports = {
    naturalToUnix,
    unixToNatural
}