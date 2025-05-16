"use client";

import { Box, Container, Typography } from "@mui/material";
import ExperienceItem from "@/components/ui/experience-item";
import { useTranslations } from "next-intl";

export default function Experience() {
  const t = useTranslations("experience");
  return (
    <Box
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container>
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            {t("title")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {t("subtitle")}
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 900, mx: "auto" }}>
          {Array.from({ length: 2 }).map((_, index: number) => (
            <ExperienceItem
              key={t(`items.${index}.title`) + t(`items.${index}.company`)}
              title={t(`items.${index}.title`)}
              company={t(`items.${index}.company`)}
              period={t(`items.${index}.period`)}
              description={t(`items.${index}.description`)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
