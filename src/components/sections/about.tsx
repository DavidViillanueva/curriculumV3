"use client";

import { Box, Container, Typography } from "@mui/material";
import { Person as PersonIcon } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "grey.50",
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
          <PersonIcon sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            {t("title")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t("description1")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t("description2")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
