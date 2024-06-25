import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      projectsData.sort((a, b) => a.id - b.id);

      setItems(projectsData);
      setOriginalItems(projectsData);
    };

    fetchItems();
  }, []);

  const filterItem = (categoryItem) => {
    if (categoryItem === "Everything") {
      setItems(originalItems);
    } else {
      const updatedItems = originalItems.filter((curElem) => {
        return curElem.category === categoryItem;
      });
      setItems(updatedItems);
    }
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section-title">My Works</h2>
      <div className="work-filters">
        <span className="work-item" onClick={() => filterItem("Everything")}>
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
