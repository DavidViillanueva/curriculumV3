"use client";

import { Box, Container, Typography } from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export default function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 3 },
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CodeIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {t("copyright", { year: new Date().getFullYear() })}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
