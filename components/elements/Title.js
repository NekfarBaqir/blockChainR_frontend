import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h1 className="text-bluishCyan text-3xl md:text-4xl lg:text-5xl font-bold uppercase my-4 md:my-8 lg:my-12">
        {title}
      </h1>
    </div>
  );
};

export default Title;
