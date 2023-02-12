import React from "react";
import { UseWorkoutContext } from "../hooks/useWorkoutContext";
import { UseAuthContext } from "../hooks/useAuthContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = UseWorkoutContext();
  const { user } = UseAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="main">
      <div className="workout-details">
        <h3>{workout.title}</h3>
        <p>
          <strong> Load(kg) : </strong>
          {workout.load}
        </p>
        <p>
          <strong> Reps : </strong>
          {workout.reps}
        </p>
        <p>{workout.createdAt}</p>
        <span className="delete-btn" onClick={handleClick}>
          Delete
        </span>
      </div>
    </div>
  );
};

export default WorkoutDetails;
