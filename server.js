const express = require('express')
const { naturalToUnix, unixToNatural } = require('./helpers')
const app = express()

app.get('/:time', (req, res) => {
    const time = req.params.time

    if (+time) {
        res.json({
            unix: +time,
            natural: unixToNatural(+time)
        })
    } else {
        res.json({
            unix: naturalToUnix(time),
            natural: time
        })
    }
})

app.listen(4000)
console.log('listening on port 4000 ...')

