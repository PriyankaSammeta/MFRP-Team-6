const express = require('express')
const router = express.Router()
//api/index.js
require('./routes/standup')(router)

module.exports = router