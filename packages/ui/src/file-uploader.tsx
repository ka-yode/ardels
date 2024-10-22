import React, { useState } from "react";
import { Input } from "./input";
import { toast } from "./toast/use-toast";
interface FileUploaderProps {
  maxFileSize?: number;
  onChange: (file: string) => void;
}
const MAX_FILE_SIZE = 1024 * 1024 * 5; //5mb
type FileInputRefType = HTMLInputElement | null;
export default function FileUploader({
  maxFileSize = MAX_FILE_SIZE,
  onChange,
}: FileUploaderProps) {
  // const [imageURL, setImageURL] = useState("");
  // const fileInputRef = useRef<FileInputRefType>(null);
  // const handleFileChange = async (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const uploadedFile = event.target.files?.[0];
  //   if (!uploadedFile) return;
  //   // check file size
  //   const fileBuffer = await uploadedFile.arrayBuffer();

  //   console.log(fileBuffer);
  //   if (uploadedFile.size > maxFileSize) {
  //     toast({
  //       description: `File size should be less than ${maxFileSize / (1024 * 1024)}MB`,
  //       variant: "destructive",
  //     });
  //     return;
  //   }
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     console.log(reader.result as string);
  //     // optimistically update the file
  //     setImageURL(reader.result as string);
  //   };
  //   reader.readAsDataURL(uploadedFile);
  //   try {
  //     await onChange(uploadedFile);
  //   } catch {
  //     toast({ description: "Couldn't upload file", variant: "destructive" });
  //   }
  //   // console.log(fileInputRef?.current.value);
  // };
  // State to store the base64
  const [base64, setBase64] = useState<string | null>(null);

  // When the file is selected, set the file state
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // setFile(e.target.files[0]);
    // if (!file) {
    //   return;
    // }
    const uploadedFile = e.target?.files[0];
    if (uploadedFile.size > maxFileSize) {
      toast({
        description: `File size should be less than ${maxFileSize / (1024 * 1024)}MB`,
        variant: "destructive",
      });
      return;
    }
    // Convert the file to base64
    const imageToBase64 = await toBase64(uploadedFile as File);

    setBase64(imageToBase64 as string);
    console.log(imageToBase64);
    await onChange(imageToBase64 as string);
    setBase64(null);
  };

  // On click, clear the input value
  const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.currentTarget.value = "";
  };

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
        console.log(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
        toast({ description: "Couldn't upload file", variant: "destructive" });
      };
    });
  };
  return <Input type="file" onChange={onFileChange} onClick={onClick} />;
}
