import React, { useEffect } from "react";
import { UseWorkoutContext } from "../hooks/useWorkoutContext";
import { UseAuthContext } from "../hooks/useAuthContext";


import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = UseWorkoutContext();
  const { user } = UseAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {'Authorization': `Bearer ${user.token}`},
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);
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
