import React from 'react'
import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget";
import BarChart from "../../components/chart/BarChart"


const Home = () => {
  return (
    <div>
            <div className="home">
               <Sidebar />
               <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                  <Widget type="user" />
                  <Widget type="product" />
                  <Widget type="order" />
                  <Widget type="earning" />
                  <div className="title" >Bar Graph</div>
                <div>
                    <BarChart width={730}
                      height={1000}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}/>
                 </div>
                </div>
               </div>
            </div>
    </div>
  )
}



export default Home
