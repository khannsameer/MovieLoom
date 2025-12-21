import { mobileNavigation } from "../constant/navigation";
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 fixed bottom-0 w-full z-40 bg-neutral-900/90 backdrop-blur-md border-t border-white/10">
      <div className="flex items-center justify-between h-full">
        {mobileNavigation.map((nav) => (
          <NavLink
            key={nav.lable + "mobileNavigation"}
            to={nav.href}
            className={({ isActive }) =>
              `px-3 flex h-full flex-col items-center justify-center
               transition-colors duration-200
               ${isActive ? "text-white" : "text-neutral-400"}`
            }
          >
            <div className="text-2xl">{nav.icon}</div>
            <p className="text-xs">{nav.lable}</p>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default MobileNavigation;
