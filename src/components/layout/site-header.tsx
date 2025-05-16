"use client";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Link as MuiLink,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Code as CodeIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Description as DescriptionIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ThemeButton from "../ui/theme-button";
import { links } from "@/configs/links.config";
const navLinks = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contact" },
];

export default function SiteHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const t = useTranslations("hero");
  const tNavigation = useTranslations("navigation");

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{ borderRadius: 0, boxShadow: 0 }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CodeIcon />
          <Typography variant="h6" fontWeight="bold">
            {t("title")}
          </Typography>
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{ width: 250 }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={tNavigation(link.name)} disablePadding>
                      <ListItemButton component="a" href={link.href}>
                        <ListItemText primary={tNavigation(link.name)} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon sx={{ mr: 1 }} fontSize="small" />
                      <ListItemText primary="GitHub" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton
                      component="a"
                      href={links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon sx={{ mr: 1 }} fontSize="small" />
                      <ListItemText primary="LinkedIn" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          <>
            <Box
              sx={{
                display: "flex",
                ml: 6,
                gap: 3,
                border: "none",
                boxShadow: 0,
              }}
            >
              {navLinks.map((link) => (
                <MuiLink
                  key={link.name}
                  href={link.href}
                  color="inherit"
                  underline="hover"
                  component={Link}
                  onClick={() => {
                    document
                      .getElementById(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {tNavigation(link.name)}
                </MuiLink>
              ))}
            </Box>

            <Box
              sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 2 }}
            >
              <IconButton
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <Button
                variant="contained"
                size="small"
                startIcon={<DescriptionIcon />}
                href={links.cv}
                target="_blank"
              >
                Resume
              </Button>
              <ThemeButton />
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
