import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import Medicine from "../Assets/Medicine.png";
import Health_care from "../Assets/Health_care.png";
import Lab from "../Assets/Lab test.png";
import ayurvadic from "../Assets/ayurvadic.png";
import equipment from "../Assets/equipment.png";
import surgical from "../Assets/surgical items.png";
import { Link, NavLink } from "react-router-dom";


const Category = () => {
    const [category, setCategory] = useState("");
    console.log(category);

    return (
        <div>
            <div className=" w-full h-max md:h-36">
        <div className="w-[91%] h-full md:bg-[#E7EFFF] m-auto rounded-xl">
          <ul className="grid grid-cols-3  justify-between items-center h-full sm:grid-cols-6 gap-2">
            <li
              onClick={() => {
                setCategory("");
              }}
              className=" mt-4 h-36 bg-[#E7EFFF]  md:bg-inherit rounded-2xl text-center pt-4 sm:p-2"
            >
              <Link to="/Medicine">
                <img
                  src={Medicine}
                  alt="medicine "
                  className="w-20 h-20 m-auto "
                />
                <span>Medicine</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setCategory("");
              }}
              className=" mt-4 h-36 bg-[#E7EFFF] md:bg-inherit  rounded-2xl text-center pt-4 sm:p-2"
            >
              <Link to="/Health">
                <img
                  src={Health_care}
                  alt="Health_care "
                  className="w-20 h-20 m-auto"
                />
                <span>Health care</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setCategory("");
              }}
              className=" mt-4 h-36 bg-[#E7EFFF] md:bg-inherit rounded-2xl text-center  pt-4 sm:p-2"
            >
              <Link to="/Lab">
                <img src={Lab} alt="Lab" className="w-20 h-20 m-auto" />
                <span>Lab test</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setCategory("");
              }}
              className=" mt-4 h-36 bg-[#E7EFFF] md:bg-inherit rounded-2xl text-center  pt-4 sm:p-2"
            >
              <Link to="/Surgical">
                <img
                  src={ayurvadic}
                  alt="ayurvadic"
                  className="w-20 h-20 m-auto"
                />
                <span>Surgical Items</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setCategory("");
              }}
              className=" mt-4 h-36 bg-[#E7EFFF] md:bg-inherit rounded-2xl text-center  pt-4 sm:p-2"
            >
              <Link to="/Ayurvedic">
                <img
                  src={equipment}
                  alt="equipment"
                  className="w-20 h-20 m-auto"
                />
                <span>Ayurvedic Medicine</span>
              </Link>
            </li>
            <li
              onClick={() => {
                setCategory("");
              }}
              className=" mt-4 h-36 bg-[#E7EFFF] md:bg-inherit rounded-2xl text-center  pt-4 sm:p-2"
            >
              <Link to="/Equipment">
                <img
                  src={surgical}
                  alt="surgical"
                  className="w-20 h-20 m-auto"
                />
                <span>Equipment on Rent</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
        </div>
    );
}

export default Category;
