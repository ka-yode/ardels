import React, { useEffect, useRef, useState } from "react";
import { Input } from "./input";
import { toast } from "./toast/use-toast";
interface FileUploaderProps {
  maxFileSize?: number;
  onChange: (fileBaseURl: string) => Promise<void> | void;
  placeholder?: string;
}
const MAX_FILE_SIZE = 1024 * 1024 * 5; //5mb
type FileInputRefType = HTMLInputElement | null;
export default function FileUploader({
  maxFileSize = MAX_FILE_SIZE,
  onChange,
  placeholder,
}: FileUploaderProps) {
  const [imageURL, setImageURL] = useState("");
  const fileInputRef = useRef<FileInputRefType>(null);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = event.target.files?.[0];
    console.log(uploadedFile);
    if (!uploadedFile) return;
    // check file size
    if (uploadedFile.size > maxFileSize) {
      toast({
        description: `File size should be less than ${maxFileSize / (1024 * 1024)}MB`,
        variant: "destructive",
      });
      return;
    }
    console.log(uploadedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      // optimistically update the file
      setImageURL(reader.result as string);
    };
    reader.readAsDataURL(uploadedFile);
    try {
      await onChange(imageURL);
    } catch {
      toast({ description: "Couldn't upload file", variant: "destructive" });
    }
    // console.log(fileInputRef?.current.value);
  };

  return (
    <Input
      type="file"
      onChange={handleFileChange}
      ref={fileInputRef}
      placeholder={placeholder}
    />
  );
}
