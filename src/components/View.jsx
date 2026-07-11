import React, { useState } from "react";

const View = () => {
  const [data] = useState([
    {
      id: 1,
      course_name: "MERN Stack Bootcamp",
      created_at: "2026-07-11T13:59:49",
      duration: "8 Days",
      fee: 15000,
      mode: "Offline",
      trainer: "Anish",
    },
    {
      id: 2,
      course_name: "Generative AI for Professionals",
      created_at: "2026-07-11T13:59:49",
      duration: "10 Days",
      fee: 25000,
      mode: "Online",
      trainer: "Rahul",
    },
  ]);

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">View Courses</h3>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Mode</th>
              <th>Trainer</th>
              <th>Created At</th>
            </tr>
          </thead>

          <tbody>
            {data.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.course_name}</td>
                <td>{course.duration}</td>
                <td>₹{course.fee}</td>
                <td>{course.mode}</td>
                <td>{course.trainer}</td>
                <td>{course.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;