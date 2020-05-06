import React from "react";

import Drawer from "antd/es/drawer";
import useFetchData from "./service";
import Skeleton from "antd/es/skeleton";

const CareerDetails = ({player,visible,onClose}) => {
  const [isLoading, output] = useFetchData(
    "./" + player.replace(" ", "_") + ".json"
  );

  const { team, age, born, batting, bowling } = output;

  return (
    <Drawer
      destroyOnClose
      title={player}
      visible={visible}
      width={640}
      onClose={onClose}
    >
      <Skeleton active loading={isLoading} paragraph={{ rows: 4 }}>
        <div style={{ padding: 10 }}>
          <p>Team - {team}</p>
          <p>age - {age}</p>
          <p>born - {born}</p>
          <p>batting - {batting}</p>
          <p>bowling - {bowling}</p>
        </div>
      </Skeleton>
    </Drawer>
  );
};

export default CareerDetails;
