const moment = require('moment');

function formatMessage(username, userid, text, status) {
    return {
        username,
        userid,
        text,
        time: moment().format('h:mm a'),
        status
    }
}

module.exports = formatMessage;