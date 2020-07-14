import { ApolloServer, gql } from "apollo-server-micro";
import { mergeResolvers, mergeTypeDefs } from "graphql-tools";
import connectDb from "../../lib/mongoose";
import { habitsResolvers } from "../../api/habits/resolvers";
import { habitsMutations } from "../../api/habits/mutations";
import Habits from "../../api/habits/Habits.graphql";

const fakeTypeDefs = gql`
  type Query {
    sayHello: String
    sayHi: String
  }
`;

const fakeResolvers = {
  Query: {
    sayHello: () => {
      return "Hello Level Up!";
    },
    sayHi: () => {
      return "Where... am I?";
    },
  },
};

const resolvers = mergeResolvers([
  fakeResolvers,
  habitsResolvers,
  habitsMutations,
]);

const typeDefs = mergeTypeDefs([fakeTypeDefs, Habits]);

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({ path: "/api/graphql" });
export default connectDb(server);

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
