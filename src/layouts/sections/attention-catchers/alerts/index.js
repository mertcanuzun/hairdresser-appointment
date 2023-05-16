import React from "react";
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// ALerts page components
import SimpleAlerts from "../alerts/components/SimpleAlerts";

// ALerts page components code
import simpleAlertsCode from "../alerts/components/SimpleAlerts/code";

function Alerts() {
  return (
    <BaseLayout
      title="Alerts"
      breadcrumb={[
        {
          label: "Page Sections",
          route: "/sections/attention-catchers/alerts",
        },
        { label: "Alerts" },
      ]}
    >
      <View title="Simple alerts" code={simpleAlertsCode}>
        <SimpleAlerts />
      </View>
    </BaseLayout>
  );
}

export default Alerts;
