// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Modals page components
import SimpleModal from "../modals/components/SimpleModal";

// Modals page components code
import simpleModalCode from "../modals/components/SimpleModal/code";

function Modals() {
  return (
    <BaseLayout
      title="Modals"
      breadcrumb={[
        {
          label: "Page Sections",
          route: "/sections/attention-catchers/modals",
        },
        { label: "Modals" },
      ]}
    >
      <View title="Simple modal" code={simpleModalCode}>
        <SimpleModal />
      </View>
    </BaseLayout>
  );
}

export default Modals;
