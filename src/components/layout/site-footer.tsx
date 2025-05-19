"use client";

import { Box, Container, Link as MuiLink, Typography } from "@mui/material";
import { Code as CodeIcon } from "@mui/icons-material";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
          <div className="flex flex-row gap-4">
            <MuiLink
              href={`es`}
              component={Link}
              className={`font-sans text-sm font-small mr-1 mx-3 :hover:underline no-underline`}
            >
              Español
            </MuiLink>
            <MuiLink
              href={`en`}
              component={Link}
              className="font-sans text-sm font-small  mr-1 :hover:underline no-underline"
            >
              English
            </MuiLink>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
