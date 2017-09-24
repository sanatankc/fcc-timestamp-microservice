const express = require('express')
const moment = require('moment')
const path = require('path')

const { naturalToUnix, unixToNatural } = require('./helpers')
const app = express()

app.use(express.static(path.resolve(__dirname, 'views')))

app.get('/:time', (req, res) => {
    const time = req.params.time

    if (!isNaN(time)) {
        if (moment.unix(time).isValid()) {
            res.json({
                unix: +time,
                natural: unixToNatural(+time)
            })
        } else {

        }
    } else {
        if (moment(time, 'MMMM DD YYYY').isValid()) {
            const timeStamp = moment(time).format('MMMM DD YYYY')
            res.json({
                unix: naturalToUnix(timeStamp),
                natural: timeStamp
            })
        } else {
            res.json({unix: null, natural: null})
        }

    }
})

app.listen(4000 || process.env.PORT)
console.log(`listening on port ${4000 || process.env.PORT} ...`)

