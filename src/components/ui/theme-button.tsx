import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import CameraIcon from "@mui/icons-material/Camera";
import { ThemeContext } from "@/context/ThemeContext";
import { useTranslations } from "next-intl";

export default function ThemeButton() {
  const t = useTranslations("theme");
  const { setTheme } = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickMenu = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    event.preventDefault();
    const selectedTheme = event.currentTarget.id as
      | "muppet"
      | "lego"
      | "cn"
      | "night";
    console.log("Selected theme:", selectedTheme);
    setTheme(selectedTheme);
    handleClose();
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        startIcon={<CameraIcon />}
        onClick={handleClick}
      >
        {t("theme")}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={(event) => handleClickMenu(event)} id="muppet">
          {t("muppet")}
        </MenuItem>
        <MenuItem onClick={(event) => handleClickMenu(event)} id="lego">
          {t("lego")}
        </MenuItem>
        <MenuItem onClick={(event) => handleClickMenu(event)} id="cn">
          {t("cn")}
        </MenuItem>
        <MenuItem onClick={(event) => handleClickMenu(event)} id="night">
          {t("nigth")}
        </MenuItem>
      </Menu>
    </>
  );
}
