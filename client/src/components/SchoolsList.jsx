import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import School from "./School";

const SchoolsList = () => {
  //declare state
  const [schools, setSchools] = useState([]);

  //get array of all schools
  const getSchools = () => {
    fetch("/schools")
      .then((response) => response.json())
      .then((data) => setSchools(data));
  };

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <div className="schools-container">
      {schools.map((school) => (
        <div key={school.id}>
          <Link className="link" to={`/schools/${school.id}`}>
            <School school={school}></School>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SchoolsList;
