import React from "react";

const Menu = ({ icon: Icon, title, onClick }) => {
  return (
      <div className="flex items-center green pointer dim pv2 f5" onClick={onClick}>
      <Icon className="mr2" />
      {title}      
    </div>
  );
};

export default Menu;
