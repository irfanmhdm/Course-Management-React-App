import React from 'react'

const AddCourse = () => {
    return (
        <div>
            <div className="container border border-2 rounded shadow p-5 mt-5">
                <div className="row">

                    <div className="col-12">
                        <div className="row g-3">

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Course Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. 3 Months"
                                />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Fee</label>
                                <input type="number" className="form-control" />
                            </div>

                            <div className="col-12 col-sm-6">
                                <label className="form-label">Mode</label>
                                <select className="form-select">
                                    <option>Select Mode</option>
                                    <option>Online</option>
                                    <option>Offline</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>

                            <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                <label className="form-label">Trainer</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="col-12 text-center mt-3">
                                <button className="btn btn-success px-5">
                                    Add Course
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddCourse