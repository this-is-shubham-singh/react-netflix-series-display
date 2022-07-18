import React from "react";
import Sdata from "./Sdata";
import Card  from "./Card";

const App = () => {
  return (
    <>
      <h1 className="header_style">LIST OF TOP NETFLIX SERIES</h1>
      {Sdata.map((val) => {
        return (
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
      ;
    </>
  );
};

export default App;
