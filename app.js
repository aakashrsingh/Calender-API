const dotenv=require("dotenv");
const express = require("express");
const {graphqlHTTP}=require("express-graphql");
const schema=require("./schema.js");
const User = require("./user.js");
const Event = require("./event.js");

const app=express();
dotenv.config();
const bodyParser=require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/eventDB", {useNewUrlParser: true, useUnifiedTopology: true});
const cors = require("cors");
// allow cross-origin requests
app.use(cors());

const rootValue = {
      users: () => User.find({}),
      user: args => User.findOne({email: args.email}),
      events: args => Event.find({email: args.email}),
    //   event: args => Event.find({date: args.date})
      addUser: ({fname, lname, email, password})=>{
          let user = new User({
              fname,
              lname,
              email,
              password
          });
          user.save(err=>
          console.log(err));
          return user;

      },
      addEvent: ({email, task, date, time, isDone}) =>{
          let event = new Event({
              email,
              task,
              date,
              time,
              isDone
          });
           event.save(err=>
          console.log(err));
        //   console.log(User.findOne({email:email}));
          return event;
      }

};
    
    



app.use("/graphql", graphqlHTTP({
    schema,
    rootValue,
    graphiql:true
}))










let port = process.env.PORT;
if(port === null || port === "" )
port=5000;
app.listen(port, () =>{
    console.log("Server is up and running on 5000!");
})
