"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import { Mail as MailIcon, Work as WorkIcon } from "@mui/icons-material";
import BackgroundPattern from "@/components/ui/background-pattern";
import { useTranslations } from "next-intl";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Hero() {
  const t = useTranslations("hero");
  const themeContext = useContext(ThemeContext);

  console.log("imageTheme", themeContext?.imageTheme);

  return (
    <Box
      id="hero"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <BackgroundPattern />
      <Container>
        <Grid container spacing={4}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            component={Box}
          >
            <Typography
              variant="h2"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              {t("title")}
            </Typography>
            <Typography variant="h5" color="text.secondary" gutterBottom>
              {t("subtitle")}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600 }}
            >
              {t("description")}
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 2 }}
            >
              <Button
                variant="contained"
                startIcon={<MailIcon />}
                href="#contact"
              >
                {t("contactButton")}
              </Button>
              <Button
                variant="contained"
                startIcon={<WorkIcon />}
                href="#skills"
              >
                {t("skillsButton")}
              </Button>
            </Stack>
          </Grid>
          <Grid
            component={Box}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={themeContext?.imageTheme}
              alt="Jane Developer"
              sx={{
                width: { xs: 250, md: 350 },
                height: { xs: 250, md: 350 },
                border: "4px solid white",
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
