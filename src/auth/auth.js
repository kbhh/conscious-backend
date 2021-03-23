import jwt from "jsonwebtoken"

const auth = (role) => {
  return async (req, res, next) => {
    const token = req.header('token');
    try {
      const decoded = jwt.verify(token, process.env.MY_SECRET);
      if (decoded.role === role || role.includes(decoded.role)) {
        req.role = decoded.role
        req.id = decoded.id
        next()
      }
      else {
        return res.status(401).json({ err: true, message: 'Unauthorized Access!.' });
      }
    } catch (error) {
      console.log(error)
      res.status(401).send({ error: 'Unauthorized Access!' })
    } 
  }
}

export default auth;