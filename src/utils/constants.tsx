type SidebarLinks = {
  path?: string;
  imgIcon: any;
  subNavs?: { path: string }[];
};

export const SIDEBAR_LINkS: SidebarLinks[] = [
  { path: "/home", imgIcon: "home.svg" },
  { path: "/search", imgIcon: "search.svg" },
  { path: "/notifications", imgIcon: "bell.svg" },
//   { path: "/messages", imgIcon: "MicrosoftStore.svg" },
//   { path: "/profile", imgIcon: "MicrosoftStore.svg" },
//   { path: "/more", imgIcon: "MicrosoftStore.svg" },
//   { path: "/user", imgIcon: "MicrosoftStore.svg" },
];
