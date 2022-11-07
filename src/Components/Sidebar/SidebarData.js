import { ProjectOutlined, ProfileOutlined } from "@ant-design/icons";

export const SidebarData = [
  {
    key: "1",
    icon: <ProjectOutlined width={32} height={32} />,
    label: "Projects",
    to: "projects",
  },
  {
    key: "2",
    icon: <ProfileOutlined />,
    label: "Profile",
    to: "profile",
  },
];
