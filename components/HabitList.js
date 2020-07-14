import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Habit from "./Habit";

const GET_HABITS = gql`
  query getHabits {
    habits {
      _id
      name
      events {
        _id
        date
      }
    }
  }
`;

const HabitList = () => {
  const { data, loading, error } = useQuery(GET_HABITS);
  if (error) {
    console.log(error);
    return <section />;
  }
  if (loading) return <section />;

  const { habits } = data;

  return (
    <section className="section-container">
      <h2>My Habits</h2>
      {habits.map((habit, index) => (
        <Habit habit={habit} key={habit._id} index={index} />
      ))}
      <style jsx>{`
        .section-container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </section>
  );
};

export default HabitList;
