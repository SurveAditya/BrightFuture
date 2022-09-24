import React from 'react'
import { Bar } from "react-chartjs-2"

import Chart from 'chart.js/auto';

import {CategoryScale} from 'chart.js';
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase"; 
Chart.register(CategoryScale);
const BarChart = () => {
    const [maths,setMath] = useState([]);
    const [physics,setPhysics] = useState([]);
    const [chemistry,setChemistry] = useState([]);
    const [names,setNames] = useState([]);
    useEffect(() => {
      const unsub = onSnapshot(
        collection(db, "users"),
        (snapShot) => {
          snapShot.docs.forEach((doc) => {
          setMath([...maths,doc.data().Maths]);
           
          });
        },
        (error) => {
          console.log(error);
        }
      );
      console.log(maths);
      return () => {
        unsub();
      };
    }, []);
    const state = {
        labels: ["Pranjali","Aditya","Leena","Aneesh"],
        datasets: [
            {
                label: " Graph of Maths Score",
                backgroundColor: "rgba(106, 90, 205)",
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 4,
                data: [90,87,90,78]
            }
        ] 
    }
    const options = {
        Plugins : {
            legend: {
                display: true,
                position: "bottom"
            },
            title: {
                text: " Total Highest Marks of a Student ",
                display: true,
                fontSize: 40
            }
        }
    }
  return (
    <div className="bargraph">
        <Bar data={state} 
            options={options}
            />
    </div>
  )
}
export default BarChart;