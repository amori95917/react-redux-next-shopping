import React, { useContext } from "react";
import Link from "next/link";
import { useLanguage } from "../../../hooks/useLanguage";
import { extraMenu } from "../../../mock/menuItems";
import SidebarContext from "../../../store/context/NavContext";
import ActiveMenuItemContext from "../../../store/context/activeMenuItemContext";
import { IDropDown } from "../../../lib/types/dropDown";
import MenuItems from "../../UI/MenuItems";

const SideNavContent = () => {
  const { t } = useLanguage();
  const sideNavCtx = useContext(SidebarContext);
  const activeMenuItemCtx = useContext(ActiveMenuItemContext);
  const openNav = (
    sidebarSideContent: IDropDown[] = [],
    activeItemName: string
  ) => {
    sideNavCtx.setDropDownList(sidebarSideContent);

    activeMenuItemCtx.setActiveMenuItemText(activeItemName);
    sideNavCtx.openSidebar();
  };
  return (
    <div className="absolute w-full h-full overflow-y-auto">
      <div className="flex flex-col  mt-3 pt-3  ltr:px-5 rtl:px-5  cursor-pointer">
        {extraMenu.map((menuItem) => {
          return (
            <div
              className="flex items-center  py-3 text-palette-mute "
              key={menuItem.title}
            >
              <menuItem.icon />
              <Link href="/">
                <a className=" mx-4">{t[`${menuItem.title}`]}</a>
              </Link>
            </div>
          );
        })}
        <hr className="mt-6 mb-4 border-gray-200" />
      </div>
      <h2 className="font-semibold text-lg py-3 ltr:px-5 rtl:px-5">
        {t.CategoryOfGoods}
      </h2>
      <MenuItems onClick={openNav} />
    </div>
  );
};

export default SideNavContent;
