import React from "react";
import {
  BsBrightnessLowFill,
  BsBrightnessAltHighFill,
  BsBrightnessHighFill,
} from "react-icons/bs";

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Home</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Recipes for breakfast</h3>
            <BsBrightnessAltHighFill className="card_icon" />
          </div>
          <h1>784</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Recipes for lunch</h3>
            <BsBrightnessHighFill className="card_icon" />
          </div>
          <h1>908</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Recipes for dinner</h3>
            <BsBrightnessLowFill className="card_icon" />
          </div>
          <h1>564</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total</h3>
          </div>
          <h1>2256</h1>
        </div>
      </div>

      {/* General Information */}
      <div className="general-info">
        <p>The application will serve as a platform where users can explore a
          variety of food recipes. It will integrate the Edamam API to fetch
          recipe data based on user queries. The goal is to create a
          user-friendly application that provides clear and concise information
          about food recipes, including ingredients, nutritional information,
          and cooking instructions.
        </p>
        <p>
          Utilize the navigation to explore different sections of the dashboard.
        </p>
      </div>

      {/* User Features */}
      <div className="user-features">
        <h2>Features List</h2>
        <ul>
          <li>
            {" "}
            User Authentication: Implement user login and registration
            functionality.
          </li>

          <li>
            Recipe Search: Allow users to search for recipes based on
            ingredients, cuisine type, dietary restrictions, etc., using the
            Edamam API.
          </li>

          <li>
            Recipe Details: Display detailed information about recipes,
            including ingredients, nutritional facts, and preparation steps.
          </li>

          <li>
            Responsive Design: Ensure the application is fully responsive and
            functional on both web and mobile platforms.
          </li>

          <li>
            User Dashboard: After logging in, users should have a dashboard
            displaying their search history and favorite recipes.
          </li>

          <li>
            Data Refresh: Implement functionality to refresh data periodically
            or on user request.
          </li>
        </ul>
      </div>

      {/* Mobile Features */}
      <div className="mobile-features">
        <h2>Mobile-Specific Features</h2>
        <p>
          The mobile app provides enhanced user experience with mobile-specific
          features and gestures.
        </p>
      </div>
    </main>
  );
}

export default Home;
