module.exports = (req, res, next) => {
  !req.user ? res.status(401).send({ error: 'User Not Logged In'}) : next();
};
