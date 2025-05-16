import { Dialog, DialogTitle, Paper, PaperProps } from "@mui/material";
import React from "react";
import ContactForm from "./contact-form";
import { useTranslations } from "next-intl";

interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

function CustomPaper(props: PaperProps) {
  return (
    <Paper
      {...props}
      sx={{
        ...props.sx,
        minWidth: "0 !important", // forzamos con !important
        width: "auto",
      }}
    />
  );
}

export default function ContactDialog({
  onClose,
  open,
}: Readonly<SimpleDialogProps>) {
  const t = useTranslations("contact.form");
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className="w-full min-w-none"
      slotProps={{
        paper: {
          classes: "w-full min-w-none",
        },
      }}
      PaperComponent={CustomPaper}
    >
      <div className="flex flex-col items-center justify-center p-4">
        <DialogTitle>{t("title")}</DialogTitle>
        <ContactForm />
      </div>
    </Dialog>
  );
}
