import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllOrder = () => {
  const [orderData, setorderData] = useState([]);
  const dataEmail = localStorage.getItem("userEmail");
  // const url = "https://temporary-five.vercel.app";

  const loadData = async () => {
    const res = await fetch('https://fd-app-qhnt.vercel.app/' + `myorderdata?email=${dataEmail}`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });

    let response = await res.json();
    setorderData(response?.order_data);
    //   console.log(response?.order_data);
  };

  // useEffect(() => {
  //   loadData();
  // }, [loadData]);
  loadData();

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container">
        <div className="row">
          {orderData?.map((item) => {
            return (
              <div className="card" style={{ width: "18rem", margin: "1vw" }}>
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="btn btn-primary">Order date: {item.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllOrder;
