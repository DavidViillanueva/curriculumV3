import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import CameraIcon from "@mui/icons-material/Camera";
import { ThemeContext } from "@/context/ThemeContext";
import { useTranslations } from "next-intl";
import { AvailableThemes, AvailableThemesThemeList } from "@/context/Themes";

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
    const selectedTheme = event.currentTarget.id as AvailableThemes;
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
        {AvailableThemesThemeList.map((theme) => (
          <MenuItem
            key={theme}
            onClick={(event) => handleClickMenu(event)}
            id={theme}
          >
            {t(theme)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
