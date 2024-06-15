import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="work">
      <h2 className="section-title">My Works</h2>
      <div className="work-filters">
        <span className="work-item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work-item" onClick={() => filterItem("Front-End")}>
          Front-End
        </span>
        <span className="work-item" onClick={() => filterItem("Full Stack")}>
          Full Stack
        </span>
        <span
          className="work-item"
          onClick={() => filterItem("CYB / ML / DL / AI / IOT / Others")}
        >
          CYB / ML / DL / AI / IOT / Others
        </span>
        <span
          className="work-item"
          onClick={() => filterItem("Mobile App Development")}
        >
          Mobile App Development
        </span>
      </div>
      <div className="work-container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, preview } = elem;
          return (
            <div className="work-card" key={id}>
              <div className="work-thumbnail">
                <img src={image} alt="" className="work-img" />
                <div className="work-mask"></div>
              </div>
              <span className="work-category">{category}</span>
              <h3 className="work-title">{title}</h3>
              <div className="work-buttons">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="work-button"
                >
                  <i className="icon-link work-button-icon"></i>
                </a>
                {preview && (
                  <a
                    href={preview}
                    target="_blank"
                    rel="noreferrer"
                    className="work-view-button"
                  >
                    <i className="icon-eye work-button-icon"></i>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
