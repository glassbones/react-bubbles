import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

//imports
import { axiosWithAuth } from '../utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColors = () => (

    axiosWithAuth()
      .get('/api/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err))

  )

  useEffect(() => { getColors() }, []);

  return (
    <>
      <ColorList 
        colors={colorList} 
        updateColors={setColorList}
        getColors={getColors}
        />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
