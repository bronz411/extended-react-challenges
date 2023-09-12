import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { students } from "../data/students";
import { useParams } from "react-router-dom";
import { urlBuilder } from "../util/urlBuilder";
import React, { useState, useEffect } from "react";

const BornToCodeMap = (props) => {
  const [position, setPosition] = useState(students[0].location);
  const { studentName } = useParams();

  let studentList = studentName
    ? students.filter((student) => urlBuilder(student.name) === studentName)
    : students;

  useEffect(() => {
    setPosition(studentList[0].location);
  }, [studentList]);
  return (
    <>
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView currentLocation={position} zoom={11} />
        {studentList.map((student, index) => (
          <Marker key={index} position={student.location}>
            <Popup>
              <h4>{student.name}'s House </h4>
              <br />
              <a href={student.linkedIn}>LinkedIn Profile</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default BornToCodeMap;

const ChangeView = (props) => {
  const lmap = useMap();
  lmap.setView(props.currentLocation, props.zoom);
};
