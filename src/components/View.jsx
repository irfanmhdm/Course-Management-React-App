import React, { useState } from "react";

const View = () => {

const [data, changeData] = useState(

    [
  {
    "id": 1,
    "course_name": "MERN Stack Bootcamp",
    "created_at": "2026-07-11T13:59:49",
    "duration": "8 Days",
    "fee": 15000,
    "mode": "Offline",
    "trainer": "Anish"
  },
  {
    "id": 2,
    "course_name": "Generative AI for Professionals",
    "created_at": "2026-07-11T13:59:49",
    "duration": "10 Days",
    "fee": 25000,
    "mode": "Online",
    "trainer": "Rahul"
  }
]
     
)


return (
    <div className="container mt-4">
        <h2 className="text-center mb-4">Course Details</h2>

        <div className="table-responsive">
            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark text-center">
                    <tr>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Fee</th>
                        <th>Mode</th>
                        <th>Trainer</th>
                        <th>Created At</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td>{value.course_name}</td>
                            <td>{value.duration}</td>
                            <td>{value.fee}</td>
                            <td>{value.mode}</td>
                            <td>{value.trainer}</td>
                            <td>{value.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
};

export default View;