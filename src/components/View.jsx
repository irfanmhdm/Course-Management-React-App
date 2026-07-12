import axios from "axios";
import React, { useEffect, useState } from "react";

const View = () => {

  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://host-demo-app.onrender.com/api/courses")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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