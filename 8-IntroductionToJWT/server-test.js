const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

// Configure its options
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');

jwtOptions.secretOrKey = 'some secret key here';

let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log('payload received', jwt_payload);

  if (jwt_payload) {
    next(null, {
      _id: jwt_payload._id,
      userName: jwt_payload.userName
    });
  } else {
    next(null, false);
  }
});

passport.use(strategy);

app.use(cors());
app.use(express.json());

app.use(passport.initialize());

const HTTP_PORT = process.env.PORT || 8080;

app.post("/api/login", (req, res) => {
      if (req.body.userName == 'demo' && req.body.password == 'demo') {
        let payload = {
            _id: req.body._id,
            userName: req.body.userName
        };

        let token = jwt.sign(payload, jwtOptions.secretOrKey);

        res.json({ message: req.body.userName, token: token });
      } else { 
        res.json({ message: "invalid user" });
      }
  });

  app.get("/api/locked", passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({message: "welcome " + req.body.userName })
  });

app.listen(HTTP_PORT, () => {
    console.log("API listening on: " + HTTP_PORT);
});