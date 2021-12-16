import React from "react";
import CollectionCards from "./CollectionCards";
import "./PunkList.css";
const Punklist = ({ punkListData, setSelectedPunk }) => {
  {
    console.log(setSelectedPunk);
  }
  return (
    <div className="punkList">
      {punkListData.map((punk) => (
        <div
          onClick={() => {
            setSelectedPunk(punk.token_id);
            console.log(setSelectedPunk);
          }}
        >
          <CollectionCards
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;
