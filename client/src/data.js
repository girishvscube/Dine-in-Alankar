export const obj = [
  {
    id: 1,
    name: "Dashboard",
    img: require("./Images/Sidenavbar/dashboard.png"),
    wimg: require("./Images/Sidenavbar/wdashboard.png"),
    status: false,
    link: "dashboard",
    submenu: {
      menulist: [],
      status: false,
    },
  },
  {
    id: 2,
    name: "Dine-In",
    img: require("./Images/Sidenavbar/dinein.png"),
    wimg: require("./Images/Sidenavbar/wdinein.png"),
    status: false,
    link: "dinein",
    submenu: {
      status: false,
      menulist: [
        {
          menuItem: "Dashboard",
          menuimg: require("./Images/Sidenavbar/dashboard.png"),
        },
        {
          menuItem: "Active Order",
          menuimg: require("./Images/Sidenavbar/activeorder.png"),
        },
        {
          menuItem: "Past Order",
          menuimg: require("./Images/Sidenavbar/pastorder.png"),
        },
        {
          menuItem: "Manage Table",
          menuimg: require("./Images/Sidenavbar/managetable.png"),
        },
        {
          menuItem: "KDS",
          menuimg: require("./Images/Sidenavbar/kds.png"),
        },
      ],
    },
  },
  {
    id: 3,
    name: "Manage Menu",
    img: require("./Images/Sidenavbar/managemenu.png"),
    wimg: require("./Images/Sidenavbar/wmanagemenu.png"),
    status: false,
    link: "managemenu",
    submenu: {
      menulist: [],
      status: false,
    },
  },
  {
    id: 4,
    name: "Manage Category",
    img: require("./Images/Sidenavbar/managecategory.png"),
    wimg: require("./Images/Sidenavbar/wmanagecategory.png"),
    status: false,
    link: "managecategory",
    submenu: {
      menulist: [],
      status: false,
    },
  },
  {
    id: 5,
    name: "Take Away",
    img: require("./Images/Sidenavbar/takeaway.png"),
    wimg: require("./Images/Sidenavbar/wtakeaway.png"),
    status: false,
    link: "takeaway",
    submenu: {
      status: false,
      menulist: [
        {
          menuItem: "Dashboard",
          menuimg: require("./Images/Sidenavbar/dashboard.png"),
        },
        {
          menuItem: "Manage Order",
          menuimg: require("./Images/Sidenavbar/activeorder.png"),
        },
      ],
    },
  },
  {
    id: 6,
    name: "Party Order",
    img: require("./Images/Sidenavbar/party.png"),
    wimg: require("./Images/Sidenavbar/wpartyorder.png"),
    status: false,
    link: "partyorder",
    submenu: {
      status: false,
      menulist: [
        {
          menuItem: "Active Order",
          menuimg: require("./Images/Sidenavbar/activeorder.png"),
        },
        {
          menuItem: "Past Order",
          menuimg: require("./Images/Sidenavbar/pastorder.png"),
        },
      ],
    },
  },
  {
    id: 7,
    name: "Manage Staff",
    img: require("./Images/Sidenavbar/managestaff.png"),
    wimg: require("./Images/Sidenavbar/wmanagestaff.png"),
    status: false,
    link: "managestaff",
    submenu: {
      menulist: [],
      status: false,
    },
  },
  {
    id: 8,
    name: "Feedback",
    img: require("./Images/Sidenavbar/feedback.png"),
    wimg: require("./Images/Sidenavbar/wfeedback.png"),
    status: false,
    link: "feedback",
    submenu: {
      menulist: [],
      status: false,
    },
  },
  {
    id: 9,
    name: "Reports",
    img: require("./Images/Sidenavbar/reports.png"),
    wimg: require("./Images/Sidenavbar/wreports.png"),
    status: false,
    link: "reports",
    submenu: {
      menulist: [],
      status: false,
    },
  },
  {
    id: 10,
    name: "Setting",
    img: require("./Images/Sidenavbar/setting.png"),
    wimg: require("./Images/Sidenavbar/wsetting.png"),
    status: false,
    link: "setting",
    submenu: {
      menulist: [],
      status: false,
    },
  },
];
