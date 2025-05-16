"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import SkillItem from "@/components/ui/skill-item";
import { useTranslations } from "next-intl";

export default function Skills() {
  const t = useTranslations("skills");
  return (
    <Box
      id="skills"
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

        <Grid container spacing={2}>
          {Array.from({ length: 10 }).map((_, index: number) => (
            <Grid key={t(`items.${index}`)}>
              <SkillItem name={t(`items.${index}`)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
