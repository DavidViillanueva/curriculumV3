import { ThemeContext } from "@/context/ThemeContext";
import { AvailableThemes, AvailableThemesThemeList } from "@/context/Themes";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItemButton, ListItemText, Collapse, List } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useContext, useState } from "react";

export default function ThemeMenuItem() {
  const t = useTranslations("theme");
  const { setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickTheme = (theme: AvailableThemes) => {
    setTheme(theme);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={t("theme")} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {AvailableThemesThemeList.map((theme) => (
            <ListItemButton sx={{ pl: 4 }} key={theme}>
              <ListItemText
                primary={t(theme)}
                onClick={() => handleClickTheme(theme)}
              />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
}
