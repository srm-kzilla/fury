import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handleReview = async ({
  review,
  token,
}: {
  review: {
    regNo: string;
    status: string;
  };
  token: string;
}) => {
  console.log("review: ", review);
  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/applications`,
      review,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data);
    if (data != undefined) {
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
  const cookies = req.headers.cookie;
  const tokenCookie = cookies
    ? cookies.split(";").find((cookie) => cookie.trim().startsWith("token="))
    : null;
  const token = tokenCookie ? tokenCookie.split("=")[1] : null;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const body = req.body;
  const review = {
    regNo: body.regNo,
    status: body.status,
  };
  const result = await handleReview({ review, token });
  if (result != undefined) {
    res.send(result);
  } else {
    res.status(400).json({ data: "Review failed" });
  }
}
