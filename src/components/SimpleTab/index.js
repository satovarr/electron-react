import React, { useState } from "react";
import Tab from "../Tab";

var tabContent = [
  {
    title: "Tab1",
    content: "fewfgewfew"

  },
  {
    title: "Tab2",
    content: "uyuyrihytuh"
    
  },
  {
    title: "Tab3",
    content: "tretretretret"
    }
];

const SimpleTabs = () => {
  return (
    <>
      <div className="row">
        <div className="col text-center">
          <h2>Tab Component</h2>
          <p>Building Tab component</p>
          <div className="row text-left">
            <Tab>
              {tabContent.map((tab, idx) => (
                <Tab.TabPane key={`Tab-${idx}`} tab={tab.title}>
                </Tab.TabPane>
              ))}
            </Tab>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleTabs;

