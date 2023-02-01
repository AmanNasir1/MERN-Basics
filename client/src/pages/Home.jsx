import React from "react";
import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { UseWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
  // const [workouts, setWorkouts] = useState(null);
  const { workouts, dispatch } = UseWorkoutContext();
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
        // setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className="con">
      <div className="workouts">
        {workouts?.map((val) => {
          return <WorkoutDetails key={val._id} workout={val} />;
        })}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
