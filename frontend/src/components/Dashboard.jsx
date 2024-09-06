import React from "react";
import "./Dashboard.css";

const categories = [
  { title: "Floods", description: "Monitor flood-related updates", img: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-01/25/full/1706206527-8399.jpg?im=FeatureCrop,size=(826,465)" },
  { title: "Earthquakes", description: "Real-time earthquake reports", img: "https://cdn.britannica.com/34/127134-050-49EC55CD/Building-foundation-earthquake-Japan-Kobe-January-1995.jpg" },
  { title: "Fires", description: "Latest wildfire information", img: "https://imgs.mongabay.com/wp-content/uploads/sites/30/2022/06/29103726/1200px-Bandipur_fires_2019-1200x800.jpg" },
  { title: "Storms", description: "Track storm warnings", img: "https://www.timeforkids.com/wp-content/uploads/2018/08/Storms-Images.jpg" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1 style={{marginTop:'15rem'}}>Disaster Response Dashboard</h1>
        <p>Real-time insights and disaster data aggregation</p>
      </header>
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.img} alt={category.title} className="category-img" />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
