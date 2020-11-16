const graphql =require("graphql");
const {buildSchema} = require("graphql");
const User=require("./user.js");
const Event =require("./event.js");

// const {
//     GraphQLObjectType,
//     GraphQLString,
//     GraphQLSchema,
//     GraphQLID,
//     GraphQLNonNull,
//     GraphQLList,
//     GraphQLBoolean
// } = graphql;

// const UserType = new GraphQLObjectType({
//     name: "User",
//     fields: ()=> ({
//         id:{
//             type: GraphQLID
//         },
//         fname:{
//             type: GraphQLString
//         },
//         lname:{
//             type: GraphQLString
//         },
//         email: {
//             type: GraphQLString
//         },
//         password: {
//             type: GraphQLString
//         },
//         events: {type: EventType}
//     })
// });


// const EventType = new GraphQLObjectType({
//     name: "Event",
//     fields: ()=>({
//         id: {
//             type:GraphQLID
//         },
//         task:{
//             type:GraphQLString
//         },
//         time:{
//             type:GraphQLString
//         },
//         isDone: {
//             type: GraphQLBoolean
//         }
//     })
// });


// const RootQuery = new GraphQLObjectType({
//     name: "RootQueryType",
//     fields: {
//         user: {type: UserType, args: {email: {type: GraphQLString}},
//         resolve(parent, args){
//             return User.findOne({email:args.email});
//         }
//         },
//         users: {type: new GraphQLList(UserType),
//         resolve(parent, args){
//             return User.find({});
//         }
//         },
//         events: {type: new GraphQLList(EventType), args: {date: {type: GraphQLString}},
//         resolve(parent, args){
//             return Event.find({date:args.date});
//         }
//         }
//     }
// });

// const Mutation = new GraphQLObjectType({
//     name: "Mutation",
//     fields: {
//         addUser: {
//             type: UserType,
//             args: {
//                 fname: {type: new GraphQLNonNull(GraphQLString)},
//                 lname: {type: new GraphQLNonNull(GraphQLString)},
//                 email: {type: new GraphQLNonNull(GraphQLString)},
//                 password: {type: new GraphQLNonNull(GraphQLString)}},
//                 resolve(parent,args){
//                     let user = new User({
//                         fname:args.fname,
//                         lname:args.lname,
//                         email:args.email,
//                         password:args.password
//                     });
//                     return user.save();
//                 }
//             },
//         addEvent: {
//             type: EventType,
//             args:{
//                 task: {type: new GraphQLNonNull(GraphQLString)},
//                 date: {type: new GraphQLNonNull(GraphQLString)},
//                 time: {type: new GraphQLNonNull(GraphQLString)},
//                 isDone: {type: new GraphQLNonNull(GraphQLBoolean)}},
//                 resolve(parent, args){
//                     let event = new Event({
//                         task:args.task,
//                         date:args.date,
//                         time:args.time,
//                         isDone:args.isDone
//                     });
//                     return event.save();
//                 }
//         },
//         removeEvent: {
//             type: GraphQLBoolean,
//             args: {task:{type: new GraphQLNonNull(GraphQLString)}},
//             resolve(parent, args){
//                 return Event.deleteOne({task:args.task});
//             }
//         }
//     }
// });





const schema= buildSchema(`
type Query {
    user(email:String!): User
    users: [User]!
    events(email: String!): [Event!]!
    event(date: String!): Event
    me: User
}
type Mutation {
    addEvent(email: String!, task: String!, date: String!, time: String!, isDone: Boolean!): Event
    addUser(fname:String!, lname:String!, email:String!, password: String!): User
    removeEvent(eventId: ID!): EventUpdateResponse!
    login(email: String): String 
}
type Event {
    email: String!
    task: String!
    date: String!
    time: String!
    isDone: Boolean
}
type User {
    fname: String!
    lname: String!
    email: String!
    password: String!
}

type EventUpdateResponse {
        success: Boolean!
        message: String
        events: [Event]
    }
    type UserUpdateResponse {
        success: Boolean!
    }
`)

module.exports = schema;

// module.exports = new GraphQLSchema({
//     query: RootQuery,
//     mutation: Mutation
// });