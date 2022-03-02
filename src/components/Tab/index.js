import React, { useEffect, useState } from "react";
import { Table } from "../Table";

import "./index.css";



const Tab = ({ children, active = 0 }) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState([]);
  const addTab = () => {
    tabsData.push({ tab: `Tab ${tabsData.length + 1}`, children: '' });
}
  useEffect(() => {
    let data = [];

    React.Children.forEach(children, (element) => {
      if (!React.isValidElement(element)) return;

      const {
        props: { tab, children },
      } = element;
      data.push({ tab, children });
    });

    setTabsData(data);
  }, [children]);

  return (
    <div className="w-100 custom-tab">
      <ul className="nav nav-tabs">
        {tabsData.map(({ tab }, idx) => (
          <li className="nav-item" key={idx}>
            <a
              className={`nav-link ${idx === activeTab ? "active" : ""}`}
              href="#"
              onClick={() => setActiveTab(idx)}
            >
              {tab}
            </a>
          </li>
        ))}
        <li className="nav-item">
            <a
                className="nav-link"
                href="#"
                onClick={() => addTab()}
            >
              New Tab  
            </a>
        </li>
      </ul>

      <div className="tab-content p-3">
        <Table>{ activeTab }</Table>
        {tabsData[activeTab] && tabsData[activeTab].children}
      </div>
    </div>
  );
};

const TabPane = ({ children }) => {
  return { children };
};

Tab.TabPane = TabPane;

export default Tab;
