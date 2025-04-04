export const navItems = [
  { name: "Dashboard", icon: "/assets/icons/dashboard.svg", url: "/" },
  { name: "Documents", icon: "/assets/icons/documents.svg", url: "/documents" },
  { name: "Images", icon: "/assets/icons/images.svg", url: "/images" },
  { name: "Media", icon: "/assets/icons/video.svg", url: "/media" },
  { name: "Others", icon: "/assets/icons/others.svg", url: "/others" },
];

export const sortTypes = [
  {
    label: "Date created (newest)",
    value: "$createdAt-desc",
  },
  {
    label: "Created Date (oldest)",
    value: "$createdAt-asc",
  },
  {
    label: "Name (A-Z)",
    value: "name-asc",
  },
  {
    label: "Name (Z-A)",
    value: "name-desc",
  },
  {
    label: "Size (Highest)",
    value: "size-desc",
  },
  {
    label: "Size (Lowest)",
    value: "size-asc",
  },
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024;
