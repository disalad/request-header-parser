exports.parseHeader = (req, res, next) => {
    const ip = req.socket.remoteAddress;
    const lang = req.headers['accept-language'];
    const software = req.headers['user-agent'];

    // Send response
    res.status(200).json({ ipaddress: ip, language: lang, software: software });
};
