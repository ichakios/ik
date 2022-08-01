import React from "react";
import "./index.css";

export interface IKTableProps {
  label: string;
}

const NotificationBanner = () => {
  return <div className="notification">
    <p>Welcome Back Ichakios</p>
    <span className="progress"></span>
  </div>;
};

export default NotificationBanner;