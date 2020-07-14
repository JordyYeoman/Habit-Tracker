import HabitButton from "./HabitButton";

const colors = ["#718096", "#F56565", "#63B3ED", "#68D391", "#F6E05E"];

const Habit = ({ habit, index }) => {
  const dates = getLast4Days();

  return (
    <article>
      <h3>{habit.name}</h3>
      <div className="buttons">
        {dates.map((date) => (
          <HabitButton
            key={date.getTime()}
            date={date}
            habitId={habit._id}
            events={habit.events}
          />
        ))}
      </div>
      <style jsx>
        {`
          article {
            padding: 20px;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
            margin: 10px;
          }
          h3 {
            margin-top: 0px;
            border-bottom: solid 4px ${colors[index]};
          }
          .buttons {
            display: flex;
          }
        `}
      </style>
    </article>
  );
};

const getLast4Days = () => {
  const dates = "01234".split("").map((day) => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() - day);
    return tempDate;
  });
  return dates;
};

export default Habit;
