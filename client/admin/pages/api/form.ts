import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handelSubmit = async ({
  form,
}: {
  form: { email: string; password: string };
}) => {
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/login`,
      form,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (data.success) {
      return data;
    }
  } catch (err) {
    console.log(err);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const form = {
    email: body.email,
    password: body.password,
  };
  const result = await handelSubmit({ form });
  if (result.success) {
    res.send(result);
  } else {
    res.status(400).json({ data: "Login failed" });
  }
}
