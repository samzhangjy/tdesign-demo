import React, { Fragment, useState } from "react";
import { Menu } from "tdesign-react";
import { SettingIcon } from "tdesign-icons-react";

const { HeadMenu, MenuItem } = Menu;

export default function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <Fragment>
      <HeadMenu
        value={active}
        onChange={(v) => setActive(v)}
        logo={
          <img
            src="https://s2.loli.net/2022/01/03/tjm1K6waToB8iJO.png"
            width="45"
            alt="logo"
          />
        }
        // logo={<h1>samzhangjy</h1>}
        operations={
          <>
            <SettingIcon className="t-menu__operations-icon" />
          </>
        }
        style={{ marginBottom: 20, paddingLeft: 50, paddingRight: 50 }}
      >
        <MenuItem value={"home"}>
          <span>首页</span>
        </MenuItem>
        <MenuItem value={"blog"}>
          <span>博客</span>
        </MenuItem>
        <MenuItem value={"contact"}>
          <span>联系</span>
        </MenuItem>
        <MenuItem value={"about"}>
          <span>关于</span>
        </MenuItem>
      </HeadMenu>
    </Fragment>
  );
}
