import React from "react";

const StatsCard = ({ type }) => {
  const colour = {
    sales: "#FFE2E5",
    order: "#FFF4DE",
    product: "#DCFCE7",
    customers: "#F3E8FF",
  };
  const text = {
    sales: "Total Sales",
    order: "Total Orders",
    product: "Product Sold",
    customers: "New Customer",
  };
  return <div>StatsCard</div>;
};

export default StatsCard;
