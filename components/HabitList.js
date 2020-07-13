import Habit from "./Habit";

const HabitList = ({ habits }) => {
  return (
    <section className="section-container">
      <h2>My Habits</h2>
      {habits.map((habit, index) => (
        <Habit habit={habit} key={habit} index={index} />
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
