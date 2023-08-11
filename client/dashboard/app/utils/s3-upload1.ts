// const { AWS_S3_BUCKET, AWS_S3_BUCKET_REGION, AWS_SECRET, AWS_KEY } =
//   process.env;
// if (!(AWS_S3_BUCKET && AWS_S3_BUCKET_REGION && AWS_SECRET && AWS_KEY)) {
//   throw new Error(`Storage is missing required configuration.`);
// }

import { S3Client } from "@aws-sdk/client-s3";

import type { Readable } from "stream";
//@ts-ignore
import { Upload } from "@aws-sdk/lib-storage";

import type { UploadHandler } from "@remix-run/node";

const { AWS_KEY, AWS_SECRET, AWS_S3_BUCKET, AWS_S3_BUCKET_REGION } =
  process.env;

if (!AWS_S3_BUCKET) {
  throw new Error(`Storage is missing required configuration.`);
}

if (!AWS_KEY) {
  throw new Error(`Storage is missing required configuration.`);
}

if (!AWS_SECRET) {
  throw new Error(`Storage is missing required configuration.`);
}

const storage = new S3Client({
  endpoint: AWS_S3_BUCKET,
  credentials: {
    accessKeyId: AWS_KEY,
    secretAccessKey: AWS_SECRET,
  },
  region: AWS_S3_BUCKET_REGION,
});

export async function uploadStreamToSpaces(stream: any, filename: string) {
  return new Upload({
    client: storage,
    leavePartsOnError: false,
    params: {
      Bucket: AWS_S3_BUCKET,
      Key: filename,
      Body: stream,
    },
  }).done();
}

export const uploadHandler = async ({ data, filename }:{data:any,filename:string}) => {
    const arr = []
    for await (const x of data){
        arr.push(x);
    }

  const upload = await uploadStreamToSpaces( new Blob(arr), filename!);
    console.log(upload)
  if (upload.$metadata.httpStatusCode === 200) {
    return filename;
  }

  return "";
};
