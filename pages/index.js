import { useState } from "react";
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

  const [habits, setHabits] = useState([
    {
      workout: [
        { exercise: "Flying Bench Press", reps: 3, weight: 64 },
        { exercise: "Dumbbell Bench Press", reps: 3, weight: 60 },
        { exercise: "Incline Bench Press", reps: 3, weight: 300 },
        { exercise: "Decline Bench Press", reps: 3, weight: 255 },
        { exercise: "Fly Bench Press", reps: 3, weight: 205 },
      ],
    },
    {
      workout2: [
        { exercise: "Barbell Bench Press", reps: 3, weight: 20 },
        { exercise: "Dumbbell Bench Press", reps: 3, weight: 60 },
        { exercise: "Incline Bench Press", reps: 3, weight: 40 },
        { exercise: "Decline Bench Press", reps: 3, weight: 25 },
        { exercise: "Fly Bench Press", reps: 3, weight: 20 },
      ],
    },
    {
      workout3: [
        { exercise: "Barbell Bench Press", reps: 3, weight: 20 },
        { exercise: "Dumbbell Bench Press", reps: 3, weight: 60 },
        { exercise: "Incline Bench Press", reps: 3, weight: 40 },
        { exercise: "Decline Bench Press", reps: 3, weight: 25 },
        { exercise: "Fly Bench Press", reps: 3, weight: 20 },
      ],
    },
  ]);
  // console.log(habits[0].workout[0].exercise);
  // console.log(
  //   habits[0].workout.map((habit) => {
  //     console.log(habit.weight);
  //   })
  // );

  let tW3 = 0;
  function calcWeight() {
    habits[0].workout.map((exercise) => {
      tW3 = tW3 + exercise.weight;
    });
    console.log(tW3);
    return tW3;
  }
  calcWeight();
  // console.log(
  //   `Exercise is ${habits[0].workout[0].exercise}, for ${habits[0].workout[0].reps} reps`
  // );

  if (loading) return <div />;
  //console.log(data, habits);

  return (
    <Layout>
      <div className="hero">
        <h1 className="title">{data.sayHi}</h1>
        <HabitForm />
        <HabitList habits={habits} />
        Total workout weight was: {tW3} Kg's!
      </div>
    </Layout>
  );
};

export default withApollo(Home);
