import React from "react";
import { Collapse, Space } from "antd";
import MKButton from "../../../components/MK/MKButton";
import hoursOfDay from "./data/hoursOfDay";
import { Grid, Stack } from "@mui/material";
const { Panel } = Collapse;

const ReservationCollapse = ({ header, buttonName, key }) => {
  return (
    <Space direction="vertical">
      <Collapse collapsible="header" defaultActiveKey={["1"]}>
        <Panel header={header} key={key}>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {hoursOfDay.map((item, index) => (
              <MKButton MKButton color="secondary">
                {item.hours[index]}
              </MKButton>
            ))}
          </Stack>
        </Panel>
      </Collapse>

      {/* <Collapse collapsible="icon" defaultActiveKey={["1"]}>
        <Panel
          header="This panel can only be collapsed by clicking icon"
          key="1"
        >
          2
        </Panel>
      </Collapse>
      <Collapse collapsible="disabled">
        <Panel header="This panel can't be collapsed" key="1">
          3
        </Panel>
      </Collapse> */}
    </Space>
  );
};

export default ReservationCollapse;
