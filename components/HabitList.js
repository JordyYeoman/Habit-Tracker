import Habit from "./Habit";

const HabitList = ({ habits }) => {
  return (
    <section className="section-container">
      <h2>My Habits</h2>
      {/* {console.log(habits)} */}
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
