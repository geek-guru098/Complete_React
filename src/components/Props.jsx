import React from "react";

function Props(props) {
  return (
    <>
      <div className="px-6 py-6 flex flex-col items-center justify-center">
        <h3>{props.title}</h3>
        <h2>{props.about}</h2>
      </div>
    </>
  );
}

export default Props;

Props.defaultProps = {
  title: "What's up",
  about: "No one",
};
