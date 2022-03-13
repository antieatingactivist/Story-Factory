const jwt = require('jsonwebtoken');

const secret = 'posislutelysekret';
const expiration = '6h';

module.exports = {
    authMiddleWare: function (req, res, next) {
        var token = req.query.token || req.header.authorization;

        if (req.header.authorization) {
            token = token.split(' ').pop.trim();
        }

        if (!token) {
            return res.status(400).json({ message: 'No token found.'});
        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Problem With token.');
            return res.status(400).json({ message: 'Problem with token.'})
        }

        next();
    },

    signToken: function ({ username, email, _id}) {
        const payload = { username, email, _id};

        return jwt.sign({ data: payload}, secret, { expiresIn: expiration});
    },
}