import Layout from "../components/Layout";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import HabitList from "../components/HabitList";
import HabitForm from "../components/HabitForm";

const HELLO_QUERY = gql`
  query HelloQuery {
    sayHello
    sayHi
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery(HELLO_QUERY);

  // // console.log(habits[0].workout[0].exercise);
  // // console.log(
  // //   habits[0].workout.map((habit) => {
  // //     console.log(habit.weight);
  // //   })
  // // );

  // let tW3 = 0;
  // function calcWeight() {
  //   habits[0].workout.map((exercise) => {
  //     tW3 = tW3 + exercise.weight;
  //   });
  //   console.log(tW3);
  //   return tW3;
  // }
  // calcWeight();
  // // console.log(
  // //   `Exercise is ${habits[0].workout[0].exercise}, for ${habits[0].workout[0].reps} reps`
  // // );

  if (loading) return <div />;
  //console.log(data, habits);

  return (
    <Layout>
      <div className="hero">
        <h1 className="title">{data.sayHi}</h1>
        <HabitForm />
        <HabitList />
      </div>
    </Layout>
  );
};

export default withApollo(Home);
