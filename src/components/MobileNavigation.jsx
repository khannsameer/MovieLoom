import { mobileNavigation } from "../constant/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 bg-neutral-600 opacity-40 fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full">
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.lable + "mobileNavigation"}
              to={nav.href}
              className={({ isActive }) =>
                `px-3 flex h-full items-center flex-col justify-center ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{nav.icon}</div>
              <p className="text-sm">{nav.lable}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
