// @mui icons

import MKTypography from "./components/MK/MKTypography";

// Images
import logoCT from "./assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  // brand: {
  //   name: "Kuaför Salonu",
  //   image: logoCT,
  //   route: "/",
  // },
  // menus: [
  //   {
  //     name: "company",
  //     items: [
  //       {
  //         name: "hakkımızda",
  //         route: "/about-us",
  //         component: <AboutUs />,
  //       },
  //       {
  //         name: "hizmetlerimiz",
  //         route: "/services",
  //         component: <Services />,
  //       },
  //       {
  //         name: "rezervasyon",
  //         route: "/rezervation",
  //         component: <Reservation />,
  //       },
  //     ],
  //   },
  // ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} 18155055 by{" "}
      <MKTypography rel="noreferrer" variant="button" fontWeight="regular">
        Mert Can Uzun
      </MKTypography>
      .
    </MKTypography>
  ),
};
