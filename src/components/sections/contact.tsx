"use client";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import {
  Mail as MailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
} from "@mui/icons-material";
import BackgroundPattern from "@/components/ui/background-pattern";
import { useTranslations } from "next-intl";
import ContactDialog from "../layout/contact-dialog";
import { useState } from "react";
import { links } from "@/configs/links.config";

export default function Contact() {
  const t = useTranslations("contact");

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: "grey.50",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BackgroundPattern />
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

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                startIcon={<MailIcon />}
                fullWidth={false}
                sx={{ minWidth: 200 }}
                onClick={handleClickOpen}
              >
                {t("emailButton")}
              </Button>
              <Button
                variant="contained"
                startIcon={<LinkedInIcon />}
                fullWidth={false}
                href={links.linkedin}
                target="_blank"
                sx={{ minWidth: 200 }}
              >
                {t("linkedinButton")}
              </Button>
              <Button
                variant="contained"
                startIcon={<GitHubIcon />}
                fullWidth={false}
                href={links.github}
                target="_blank"
                sx={{ minWidth: 200 }}
              >
                {t("githubButton")}
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
      <div className="min-w-screen">
        <ContactDialog open={open} onClose={handleClose} />
      </div>
    </>
  );
}
