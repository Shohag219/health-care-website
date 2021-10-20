import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../UseContext/useAuth";

const DoctorsDetails = () => {
  const [doctor, setDoctor] = useState([]);
  const { doctors } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    const thisDoctor = doctors.filter((d) => d.id == id);
    setDoctor(thisDoctor);
  }, []);
  return (
    <div>
      <div className="w-50 text-center mx-auto my-5">
        <div>
          <img src={doctor[0]?.img} alt="" />
        </div>
        <div>
          <h3>{doctor[0]?.name}</h3>
          <h6>{doctor[0]?.category}</h6>
          <small>{doctor[0]?.deg}</small>
          <p>
            <b>{doctor[0]?.experience}</b>
          </p>
          <strong>Cabin : {doctor[0]?.des}</strong>
          <br />
          <Link to={`/appointment/${doctor[0]?.name}`}>
            <button className="btn btn-warning my-3">Get Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDetails;
