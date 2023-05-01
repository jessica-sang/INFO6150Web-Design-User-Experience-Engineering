const menu = [
  {
    name: "Home",
    path: "/",
    hasSubItem: false
  },
  {
    name: "Study Blogs",
    hasSubItem: true,
    children: [
      {
        name: "Web_design",
        path: "/Webdesign.html"
      },
      {
        name: "Algorithm",
        path: "/Algorithm.html"
      },
      {
        name: "Interview",
        path: "/Interview.html"
      },
    ]
  },
  {
    name: "About",
    path: "/about.html",
    hasSubItem: false
  },
  {
    name: "Album",
    path: "/album.html",
    hasSubItem: false
  }
];

export default menu;