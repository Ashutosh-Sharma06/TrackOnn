import React, { useState } from "react";
import list from "../data"
import Card from './Card';
import { Link } from "react-router-dom";
//import puppeteer from 'puppeteer';
import "./style.css";

import "./Login.css";




const Userpage = ({ handleClick }) => {
    


    
    return (
        <div className="container-fluid container">
        <div className="row">
            <div className="section-title aos-init aos-animate" data-aos="fade-up">

                <center><h2>Welcome to TrackOnn</h2></center>
                <hr />
            </div>
            <div className="row">
                <h3 style={{ color: "black", marginLeft: "10rem" }} className="col">Add your item: </h3><div className="input-group mb-10 col" style={{ marginRight: "10rem" }} >
                    <input type="text" className="fixed-bottom container-fluid bg-white shadow-1-strong  form-control" placeholder="Enter URL" />
                    <Link to= '/userpagenew'><button type="button" class="btn btn-primary" >Add</button></Link>
                </div>
            </div>
            <div className="row">
                <h3 style={{ color: "black", marginLeft: "10rem" }} className="col">Remove your item: </h3><div className="input-group mb-10 col" style={{ marginRight: "10rem" }} >
                    <input type="text" className="fixed-bottom container-fluid  bg-white shadow-1-strong  form-control" placeholder="Enter Name" />
                    <button type="button" class="btn btn-danger" > Remove</button>
                </div>
            </div>
            <p><h2>Your added items:</h2></p>
            
            {list.map((item) => (
                <Card key={item.id} item={item} handleClick={handleClick} />
            )
            )}
        </div>
        </div>
    )
}
export default Userpage;