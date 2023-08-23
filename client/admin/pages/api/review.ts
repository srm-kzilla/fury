import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import nookies from "nookies";

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
  try {
    const { data } = await axios.put(
      `${process.env.API_URL}/applications`,
      review,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
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
  const cookies = nookies.get({ req });
  const token = cookies.token;

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
