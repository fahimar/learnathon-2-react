import React from "react";
import "./sidebar.css";

interface SidebarProps {
  items: Array<{
    id: number;
    label: string;
    onClick: () => void;
  }>;
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="sidebar">
      {items.map((item) => (
        <div key={item.id} className="sidebar-item" onClick={item.onClick}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
