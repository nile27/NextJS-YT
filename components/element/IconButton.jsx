import React from "react";

const IconButton = ({ icon, onClickIcon = () => {} }) => {
  return (
    <div>
      <div
        onClick={onClickIcon}
        className="flex items-center justify-center w-[36px] h-[36px]
        rounded-full cursor-pointer hover:bg-[rgba(144,144,144,0.45)]
        "
      >
        {icon}
      </div>
    </div>
  );
};

export default IconButton;
