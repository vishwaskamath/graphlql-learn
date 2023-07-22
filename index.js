import express from 'express'
import resolvers from './resolvers.js'
import schema from './schema'
import {graphqlHTTP} from 'express-graphql'

const app = express()

app.get("/", (req,res)=>{
    res.send("up and running")
})

const root = resolvers;


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(8082, ()=>{
    console.log("running 8082")
})