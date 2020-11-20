import { gql} from 'apollo-server-express';

const user=[
    {
        id:"1",
        name:'chinawat1',
        username:'chainwatza1141',
        password:'1234561',
        email:'puem26391@gmail.com',
    },
    {
        id:'2',
        name:'chinawat2',
        username:'chainwatza1142',
        password:'1234562',
        email:'puem26392@gmail.com',
    },
    {
        id:'3',
        name:'chinawat3',
        username:'chainwatza1143',
        password:'1234563',
        email:'puem26393@gmail.com',
    },
    {
        id:'4',
        name:'chinawat4',
        username:'chainwatza1144',
        password:'1234564',
        email:'puem26394@gmail.com',
    },
    {
        id:'5',
        name:'chinawat5',
        username:'chainwatza1145',
        password:'1234565',
        email:'puem26395@gmail.com',
    },
]

export const resolvers ={
    Query: {
        user: (parent,args,context,info)=>{
            return user.filter((user) => user.id.toString() === args.id)[0];
        },
        users: (parent,args,context,info)=>{return user},

     }
    }
export const typeDefs = gql`

    type Query{
        me:User!
        user(id:ID!):User
        users:[User]!       
    }
    type User{
        id:ID!
        name:String!
        username:String!
        password:String!
        email:String!
    }
`;