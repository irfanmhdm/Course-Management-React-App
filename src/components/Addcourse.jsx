import axios from 'axios';
import React, { useState } from 'react';

const Addcourse = () => {

    const [input, changeInput] = useState({
        course_name: "",
        duration: "",
        fee: "",
        mode: "",
        trainer: ""
    });

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });
    };

    const readValue = () => {
        console.log(input);

        axios.post("https://host-demo-app.onrender.com/api/add-course",input).then((response)=>
            {
                console.log(response.data)
                alert("Success !")
            }).catch()
    };

    return (
        <div>
            <div className="container border border-2 rounded shadow p-5 mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Course Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course_name"
                                    value={input.course_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. 7 Days"
                                    name="duration"
                                    value={input.duration}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Fee</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="fee"
                                    value={input.fee}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Mode</label>
                                <select
                                    className="form-select"
                                    name="mode"
                                    value={input.mode}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select Mode</option>
                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>

                            <div className="col-12 col-lg-6">
                                <label className="form-label">Trainer</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="trainer"
                                    value={input.trainer}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 text-center mt-3">
                                <button
                                    className="btn btn-success px-5"
                                    onClick={readValue}
                                >
                                    Add Course
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addcourse;