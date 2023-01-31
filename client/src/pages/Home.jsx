import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div>
      <div className="workouts">
        {workouts?.map((val) => {
          return <WorkoutDetails key={val._id} workout={val} />;
        })}
      </div>
    </div>
  );
};

export default Home;
