import { useContext, useRef, useState } from "react";
import { Field } from "formik";
import { useDropzone } from "react-dropzone";
import { BiX } from "react-icons/bi";

import { APIService } from "~/shared/services/api-service";
import  toast  from "../../../utils/toast.client";
import { StoreContext } from "~/components/Wizard/Store";


type DropZoneProps = {
  name: string;
  label?: string;
};

type FieldProps = {
  field: { value: any };
  form: { setFieldValue: Function };
  meta: { touched: string[]; error: string[] };
};

type FileObject = {
  name: string;
};

const DropZone = ({ name, label }: DropZoneProps) => {
  const [files, setFiles] = useState<FileObject[]>([]);
  const [limit, setLimit] = useState(false);
  let { blob, setBlob } = useContext(StoreContext);

  const onDrop = async (acceptedFiles: any) => {
    setLimit(true);
    if (limit) {
      return toast.error('You can upload only one file')
    }
    toast.show('We are shoveling your files into our servers', "⛏️");
    let formData = new FormData();
    // Limiting file size
    if ((acceptedFiles[0] as File).size > 30 * 1000 * 1000) {
      setLimit(false);
      return toast.error('You can upload only file upto 30mb in size')
    }
    const fileTypeRegex =
      /^(image\/*)|(application\/(zip|vnd\.rar|pdf|msdoc|wps-office\.docx|vnd\.openxmlformats-officedocument\.wordprocessingml\.document)|(text\/plain))$/;
    if (!fileTypeRegex.test((acceptedFiles[0] as File).type)) {
      setLimit(false);
      return toast.error('You can only upload an image, PDF, word/text document or a zip/rar file.');
    }
    formData.append("file", acceptedFiles[0]);
    let receivedBlob;
    try {
      setFiles([...files, ...acceptedFiles]);
      receivedBlob = await APIService.getInstance().getBlobURL(formData);
      setBlob(receivedBlob.data.location);
      toast.success('We got your files.');
    } catch (err) {
      switch ((err as any).response?.status) {
        case 413:
          toast.error("The file you have uploaded is too large.");
          break;
        default:
          toast.error("It's not you, it's us. Please try again.");
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const removeFile = (file: FileObject) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
    setBlob("");
    setLimit(false);
  };

  const myFiles = files.map((file) => (
    <div key={file.name} className="file-name">
      <div>{file.name}</div>
      <div>
        <BiX onClick={removeFile(file)} color="#ff644e" size={30} />
      </div>
    </div>
  ));
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta: { touched, error } }: FieldProps) => {
          return (
            <>
              <div
                {...getRootProps({ className: "dropzone" })}
                className="dropzone"
              >
                <input {...getInputProps()} />
                {limit ? (
                  <p>{myFiles}</p>
                ) : (
                  <p className={"drop-zone"}>
                    Drag and drop your files here, or click to select files
                  </p>
                )}
              </div>
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default DropZone;
