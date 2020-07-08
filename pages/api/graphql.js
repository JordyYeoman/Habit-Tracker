import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Query {
    sayHello: String
    sayHi: String
  }
`;

const resolvers = {
  Query: {
    sayHello: () => {
      return "Draxen Enterprises!";
    },
    sayHi: () => {
      return "Wahhh...... where... where am I?";
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });

// // Short Way
// export default (req, res) => {
//   console.log("Server Booting...");

//   res.status(200).json({
//     test: "Server is alive",
//     test2: "Hello.. Where am I?",
//   });
// };

// Long way of making a response :D
//   export default (req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     res.statusCode = 200;
//     res.end(
//       JSON.stringify({
//         test: "Hello Level Up!",
//       })
//     );
//   };
