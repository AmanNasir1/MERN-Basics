import React from "react";

const WorkoutDetails = ({ workout }) => {
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
      </div>
    </div>
  );
};

export default WorkoutDetails;
