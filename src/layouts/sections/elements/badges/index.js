// Sections components
import BaseLayout from "../../components/BaseLayout";
import View from "../../components/View";

// Badges page components
import BadgesGradient from "../../elements/badges/components/BadgesGradient";
import BadgesSimple from "../../elements/badges/components/BadgesSimple";
import BadgesSimpleRounded from "../../elements/badges/components/BadgesSimpleRounded";

// Badges page components code
import badgesGradientCode from "../../elements/badges/components/BadgesGradient/code";
import badgesSimpleCode from "../../elements/badges/components/BadgesSimple/code";
import badgesSimpleRoundedCode from "../../elements/badges/components/BadgesSimpleRounded/code";

function Badges() {
  return (
    <BaseLayout
      title="Badges"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/badges" },
        { label: "Badges" },
      ]}
    >
      <View title="Badges gradient" code={badgesGradientCode}>
        <BadgesGradient />
      </View>
      <View title="Badges simple" code={badgesSimpleCode}>
        <BadgesSimple />
      </View>
      <View title="Badges simple rounded" code={badgesSimpleRoundedCode}>
        <BadgesSimpleRounded />
      </View>
    </BaseLayout>
  );
}

export default Badges;
