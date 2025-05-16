"use server";

interface Response {
  code: 200 | 500;
  message: string;
}

export default async function sendMail(
  _prevState: unknown,
  formData: FormData
): Promise<Response> {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    body: formData.get("body"),
  };

  const fetchResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": process.env.BREVO_API_KEY || "",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "Curriculum Digital",
        email: "david1997@live.com.ar",
      },
      to: [
        {
          email: process.env.TARGET_EMAIL || "",
          name: process.env.TARGET_NAME || "",
        },
      ],
      subject: "Contacto desde Curriculum",
      htmlContent: `<html><head></head><body><p>${rawFormData.name} - ${rawFormData.email}</p>${rawFormData.body}</p></body></html>`,
    }),
  });

  if (!fetchResponse.ok) {
    return {
      message: "Something wrong",
      code: 500,
    };
  }

  return {
    message: "",
    code: 200,
  };
}
