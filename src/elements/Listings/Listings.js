import React from "react";
import Listing from "../Listing/Listing";
import Box from "@mui/material/Box";

function Listings() {
  let staticData = [
    {
      id: 1,
      headline:
        "Fully furnished 2bhk apartment for rent in Dubai SIlicon Oasis",
      amount: 40000,
      locality: "Dubai Silicon Oasis",
      broker: "Al Hilal Brokers",
      featured: false,
    },
    {
      id: 2,
      headline:
        "Fully furnished 2bhk apartment for rent in Dubai SIlicon Oasis",
      amount: 40000,
      locality: "Dubai Silicon Oasis",
      broker: "Al Hilal Brokers",
      featured: false,
    },
    {
      id: 3,
      headline:
        "Fully furnished 2bhk apartment for rent in Dubai SIlicon Oasis",
      amount: 40000,
      locality: "Dubai Silicon Oasis",
      broker: "Al Hilal Brokers",
      featured: false,
    },
    {
      id: 4,
      headline:
        "Fully furnished 2bhk apartment for rent in Dubai SIlicon Oasis",
      amount: 40000,
      locality: "Dubai Silicon Oasis",
      broker: "Al Hilal Brokers",
      featured: false,
    },
    {
      id: 5,
      headline:
        "Fully furnished 2bhk apartment for rent in Dubai SIlicon Oasis",
      amount: 40000,
      locality: "Dubai Silicon Oasis",
      broker: "Al Hilal Brokers",
      featured: false,
    },
  ];
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div>
        {staticData.map((item, index) => {
           return( index<(Math.ceil(staticData.length/3))?<Listing props={item} key={index}/>:null)
        })}
        ;
      </div>
      <div>
        {staticData.map((item, index) => {
           return( index>=(Math.ceil(staticData.length/3)) && index<(Math.ceil(staticData.length* (2/3))) ?<Listing props={item} key={index}/>:null)
        })}
        ;
      </div>
      <div>
        {staticData.map((item, index) => {
           return( index>=(Math.ceil(staticData.length*(2/3)))?<Listing props={item} key={index}/>:null)
        })}
        ;
      </div>
    </Box>
  );
}

export default Listings;
