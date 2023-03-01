const {ApolloServer,gql} = require('apollo-server');

let typeDefs=gql`
type Roles{
    id:String
    role:String
}
type Query{
    role:[Roles]
}
`;
let resolvers={
    Query:{
        role:()=>role
    }


}

let server=new ApolloServer({typeDefs,resolvers});
server.listen();
console.log('server running');
let role=[
    {
        id:'1',
        role:'Doctor',
    },
    {
        id:'2',
        role:'patient',
    },
    {
        id:'3',
        role:'admin'
    }
    
]