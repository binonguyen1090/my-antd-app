import React, { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// import { Drawer, Skeleton } from "antd";
import Drawer from "antd/es/drawer";
// import useFetchData from "./service";

const CareerDetails = ({player,visible,onClose}) => {
  const [detail, setdetail] = useState({})
  const {team, age, born, batting, bowling} = detail
  useEffect(()=>{
    async function fetchData() {
      await fetch("./" + player.replace(" ", "_") + ".json").then(
        (response) => {
          response.json().then((data) => setdetail(data));
        }
      );
    }
    fetchData();
      // console.log('useEffect', player);
      return() =>{
          console.log('return player first')
      }
  }, [player])
  useEffect(()=>{
    
      console.log('mount')
      return () => {
        console.log("unmount");
      };
  }, [])
  return (
    <Drawer
      destroyOnClose
      title={player}
      visible={visible}
      width={640}
      onClose={onClose}
    >
      {/* <Skeleton active loading={isLoading} paragraph={{ rows: 4 }}> */}
        <div style={{ padding: 10 }}>
          <p>Team - {team}</p>
          <p>age - {age}</p>
          <p>born - {born}</p>
          <p>batting - {batting}</p>
          <p>bowling - {bowling}</p>
        </div>
      {/* </Skeleton> */}
    </Drawer>
  );
};

// const CareerDetails = ({ player, visible, onClose }) => {
//   const [details, setDetails] = useState({});
//   const [isLoading, output] = useFetchData(
//     "./" + player.replace(" ", "_") + ".json"
//   );
//   const { name, team, age, born, batting, bowling } = output;

//   return (
//     <Drawer
//       destroyOnClose
//       title={player}
//       visible={visible}
//       width={640}
//       onClose={onClose}
//     >
//       <Skeleton active loading={isLoading} paragraph={{ rows: 4 }}>
//         <div style={{ padding: 10 }}>
//           <p>Team - {team}</p>
//           <p>age - {age}</p>
//           <p>born - {born}</p>
//           <p>batting - {batting}</p>
//           <p>bowling - {bowling}</p>
//         </div>
//       </Skeleton>
//     </Drawer>
//   );
// };

export default CareerDetails;
