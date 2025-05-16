"use client";

import { useFormStatus } from "react-dom";
import Button from "@mui/material/Button";

export function SubmitButton({
  label,
  disabled,
}: Readonly<{
  label: string;
  disabled: boolean;
}>) {
  const { pending } = useFormStatus();

  return (
    <Button
      size="small"
      className="w-36"
      variant="contained"
      type="submit"
      disabled={pending || disabled}
    >
      {label}
    </Button>
  );
}
