/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Icons from "views/Icons.jsx";
import Icons2 from "views/Icons2.jsx";
import Map from "views/Map.jsx";
import Notifications from "views/Notifications.jsx";
import Rtl from "views/Rtl.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import UserProfile from "views/UserProfile.jsx";

var routes = [
  {
    path: "/inicio",
    name: "Inicio",
    rtlName: "Dashboard",
    icon: "tim-icons icon-calendar-60",
    component: Icons,
    layout: "/utai"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "Icons",
  //   icon: "tim-icons icon-atom",
  //   component: Dashboard,
  //   layout: "/utai"
  // },
  {
    path: "/mapa",
    name: "Mapa Campus",
    rtlName: "Mapa Campus",
    icon: "tim-icons icon-square-pin",
    component: Map,
    layout: "/utai"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "Notifications",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/utai"
  // },
  {
    path: "/user-profile",
    name: "Mi Perfil",
    rtlName: "Mi Perfil",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/utai"
  },
  {
    path: "/top",
    name: "Alumnos Top",
    rtlName: "Alumnos Top",
    icon: "tim-icons icon-shape-star",
    component: TableList,
    layout: "/utai"
  },
  {
    path: "/historial",
    name: "Historial",
    rtlName: "Typography",
    icon: "tim-icons icon-bag-16",
    component: Typography,
    layout: "/utai"
  }
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "RTL Support",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl"
  // }
];
export default routes;
