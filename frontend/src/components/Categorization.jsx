import React from 'react';
import './Categorization.css';
import CardContainer from './CardContainer';
import Dashboard from './Dashboard';
import Footer from './Footer';

const Categorization = () => {
  const scrollToCardContainer = () => {
    document.getElementById('card-container-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="categorization">
      <div className="left-column">
        <div className="scrolling-content">
          <div className="alert-item">
            <img src="https://www.aljazeera.com/wp-content/uploads/2024/09/AFP__20240902__36FC3KC__v1__HighRes__IndiaWeatherFlood-1725289194.jpg?resize=770%2C513&quality=80" alt="Disaster Image 1" className="alert-image"/>
            <div className="alert-info">
              <i className="alert-icon">⚠️</i>
              <h3>Flood Alert</h3>
              <p>Heavy Floods in Vijaywada</p>
            </div>
          </div>
          
          <div className="alert-item">
            <img src="https://www.aljazeera.com/wp-content/uploads/2024/09/AFP__20240902__36FC3KC__v1__HighRes__IndiaWeatherFlood-1725289194.jpg?resize=770%2C513&quality=80" alt="Disaster Image 1" className="alert-image"/>
            <div className="alert-info">
              <i className="alert-icon">⚠️</i>
              <h3>Flood Alert</h3>
              <p>Heavy Floods in Vijaywada</p>
            </div>
          </div>

          <div className="alert-item">
            <img src="https://www.aljazeera.com/wp-content/uploads/2024/09/AFP__20240902__36FC3KC__v1__HighRes__IndiaWeatherFlood-1725289194.jpg?resize=770%2C513&quality=80" alt="Disaster Image 1" className="alert-image"/>
            <div className="alert-info">
              <i className="alert-icon">⚠️</i>
              <h3>Flood Alert</h3>
              <p>Heavy Floods in Vijaywada</p>
            </div>
          </div>



        </div>
      </div>

      <div className="right-column">
        <div className="scrolling-content">
          <div className="alert-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Low_pressure_system_over_Iceland.jpg" alt="Disaster Image 2" className="alert-image"/>
            <div className="alert-info">
              <i className="alert-icon">⚠️</i>
              <h3>Cyclone Alert</h3>
              <p>Cyclone Remal in Northeastern India</p>
            </div>
          </div>
         


          <div className="alert-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Low_pressure_system_over_Iceland.jpg" alt="Disaster Image 2" className="alert-image"/>
            <div className="alert-info">
              <i className="alert-icon">⚠️</i>
              <h3>Cyclone Alert</h3>
              <p>Cyclone Remal in Northeastern India</p>
            </div>
          </div>

          <div className="alert-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Low_pressure_system_over_Iceland.jpg" alt="Disaster Image 2" className="alert-image"/>
            <div className="alert-info">
              <i className="alert-icon">⚠️</i>
              <h3>Cyclone Alert</h3>
              <p>Cyclone Remal in Northeastern India</p>
            </div>
          </div>


        </div>
      </div>

      <div className="content">
        <h2>Real-time Categorization of Disaster-related Data</h2>
        <p>
          Automatically gather, categorize, and analyze disaster-related data from various sources 
          like social media and news portals in real-time, giving you immediate insights.
        </p>
        <div className="image-gallery">
          <div className="gallery-item">
            <img 
              src="https://businessdegrees.uab.edu/wp-content/themes/ckg-blank-child/img/resources/Data-Driven-Social-Media-Marketing.jpg" 
              alt="Social Media Data" 
              className="gallery-image"
            />
            <p className="image-title">Social Media Data</p>
          </div>
          <div className="gallery-item">
            <img 
              src="https://traffictail.com/wp-content/uploads/2021/01/Untitled-design-17-1-1024x536.png" 
              alt="News Portal Data" 
              className="gallery-image"
            />
            <p className="image-title">News Portal Data</p>
          </div>
          <div className="gallery-item">
            <img 
              src="https://chartio.com/images/blog/headers-descriptions-and-dividers-for-dashboards/dashboard.png" 
              alt="Data Dashboard" 
              className="gallery-image"
            />
            <p className="image-title">Data Dashboard</p>
          </div>
        </div>
      </div>
      <div id="card-container-section">
        <CardContainer />
        <Dashboard/>
        <Footer/>
      </div>
      <div className="down-arrow" onClick={scrollToCardContainer}>↑</div>
    </section>
  );
}

export default Categorization;
