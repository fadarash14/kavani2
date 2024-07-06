import Dashboard from "@/assets/icons/dashboard.svg?react";
import Team from "@/assets/icons/team.svg?react";


// 1:SUPERUSER
// 2:user
const navList = [
  {
    id: "1a",
    name: "داشبورد",
    href: "/superuser",
    index: true,
    icon: Dashboard,
    role: "SUPERUSER",
  },
  {
    id: "2a",
    name: "کاربران",
    href: "/superuser/registered-account",
    icon: Team,
    role: "SUPERUSER",
  },
 
  {
    id: "3a",
    name: "ثبت جدید",
    href: "/superuser/new-register",
    icon: Team,
    role: "SUPERUSER",
  },
 

 
  // {
  //   id: "3a",
  //   name: "پروژه‌ها",
  //   href: "/superuser/projects",
  //   icon: Projects,
  //   role: "SUPERUSER",
  // },
  //   {
  //     id: 4,
  //     name: "تقویم",
  //     href: "/SUPERUSER/calendar",
  //     icon: Calendar,
  //   },
  //   {
  //     id: 5,
  //     name: "گزارش‌ها",
  //     href: "/SUPERUSER/report",
  //     icon: Reports,
  //   },
  //   {
  //     id: 6,
  //     name: "اسناد",
  //     href: "/SUPERUSER/document",
  //     icon: Document,
  //   },
];

export default navList;
