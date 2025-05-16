import sendMail from "@/actions/SendMail.action";
import { FormControl, TextField, FormHelperText } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useActionState, useEffect, useState } from "react";
import { SubmitButton } from "../ui/SubmitButton";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [state, formAction] = useActionState(sendMail, {
    message: "",
    code: 0,
  });

  useEffect(() => {
    if (state.code === 200) resetForm();
  }, [state]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setBody("");
  };
  return (
    <form
      className="flex flex-col sm:w-[35rem]  justify-center gap-4"
      action={formAction}
    >
      <FormControl className="m-3">
        <TextField
          id="name"
          name="name"
          label={t("name")}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          variant="outlined"
        />
      </FormControl>
      <FormControl className="m-3">
        <TextField
          id="email"
          name="email"
          label={t("email")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          variant="outlined"
        />
        <FormHelperText id="outlined-weight-helper-text">
          {t("emailHelperText")}
        </FormHelperText>
      </FormControl>
      <FormControl className="m-3">
        <TextField
          id="body"
          name="body"
          label={t("bodyEmail")}
          multiline
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          rows={6}
          variant="outlined"
        />
      </FormControl>
      <div className="items-center flex flex-col">
        {state.code === 200 && (
          <FormHelperText
            id="outlined-weight-helper-text"
            className="text-green-500"
          >
            {t("emailSuccess")}
          </FormHelperText>
        )}
        {state.code === 500 && (
          <FormHelperText
            id="outlined-weight-helper-text"
            className="text-red-500"
          >
            {t("emailError")}
          </FormHelperText>
        )}
        <SubmitButton
          label={t("buttons.send")}
          disabled={!name || !email || !body}
        />
      </div>
    </form>
  );
}
