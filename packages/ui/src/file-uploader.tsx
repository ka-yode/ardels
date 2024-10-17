// import React, { useEffect, useRef, useState } from "react";
// import { Input } from "./input";
// import { toast } from "./toast/use-toast";
// interface FileUploaderProps {
//   maxFileSize?: number;
//   onChange: (file: File) => Promise<void> | void;
// }
// const MAX_FILE_SIZE = 1024 * 1024 * 5; //5mb
// type FileInputRefType = HTMLInputElement | null;
// export default function FileUploader({
//   maxFileSize = MAX_FILE_SIZE,
//   onChange,
// }: FileUploaderProps) {
//   const [imageURL, setImageURL] = useState("");
//   const fileInputRef = useRef<FileInputRefType>(null);
//   const handleFileChange = async (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const uploadedFile = event.target.files?.[0];
//     if (!uploadedFile) return;
//     // check file size
//     const fileBuffer = await uploadedFile.arrayBuffer();

//     console.log(fileBuffer);
//     if (uploadedFile.size > maxFileSize) {
//       toast({
//         description: `File size should be less than ${maxFileSize / (1024 * 1024)}MB`,
//         variant: "destructive",
//       });
//       return;
//     }
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       console.log(reader.result as string);
//       // optimistically update the file
//       setImageURL(reader.result as string);
//     };
//     reader.readAsDataURL(uploadedFile);
//     try {
//       await onChange(uploadedFile);
//     } catch {
//       toast({ description: "Couldn't upload file", variant: "destructive" });
//     }
//     // console.log(fileInputRef?.current.value);
//   };

//   return (
//     <Input
//       type="file"
//       onChange={handleFileChange}
//       ref={fileInputRef}
//       placeholder={placeholder}
//     />
//   );
// }
import { useRef, useState } from "react";
import { Camera, LoaderCircle } from "lucide-react";

import React from "react";
import { toast } from "./toast/use-toast";
import { Input } from "./input";
import { cn } from "./lib/util";

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB

type FileInputRefType = HTMLInputElement | null;

interface Props {
  currentImageID: string;
  onChange: (file: File) => Promise<void> | void;
  hasError: boolean;
  isLoading: boolean;
  maxFileSize?: number;
  showUploadIcon?: boolean;
  parentClass?: string;
  imageClass?: string;
  inputClass?: string;
  hoverUIClass?: string;
  uploadButtonClass?: string;
  alt: string;
  nextImageSize?: number;
}

export const FileUploader = ({
  currentImageID,
  maxFileSize = MAX_FILE_SIZE,
  onChange,
  hasError,
  isLoading,
  showUploadIcon,
  imageClass,
  inputClass,
  parentClass,
  hoverUIClass,
  uploadButtonClass,
  alt,
  nextImageSize = 400,
}: Props) => {
  const [imageURL, setImageURL] = useState("");
  const fileInputRef = useRef<FileInputRefType>(null);

  const handleInputClick = () => {
    if (hasError) {
      toast({ description: "Error occured, try reloading the page" });
      return;
    }
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;
    // check file size
    if (uploadedFile.size > maxFileSize) {
      toast({
        description: `File size should be less than ${maxFileSize / (1024 * 1024)}MB`,
      });
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result as string);
      // optimistically update the image
      setImageURL(reader.result as string);
    };
    reader.readAsDataURL(uploadedFile);
    try {
      await onChange(uploadedFile);
    } catch {
      fileInputRef.current?.value && (fileInputRef.current.value = "");
    }
  };

  return (
    <figure className={cn("group relative cursor-pointer", parentClass)}>
      {isLoading ? (
        <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
          <LoaderCircle size={70} className="animate-spin" />
        </div>
      ) : !showUploadIcon ? (
        <button
          type="button"
          disabled={isLoading || hasError}
          onClick={handleInputClick}
          className={cn(
            "absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black/35 opacity-100 group-hover:opacity-100",
            hoverUIClass
          )}
        >
          <Camera size={60} className="opacity-80" />
        </button>
      ) : null}
      <Input
        className={cn(
          "z-80 absolute h-full w-full cursor-pointer text-transparent opacity-0 disabled:opacity-0",
          inputClass
        )}
        type="file"
        disabled={isLoading || hasError}
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {/* <Image
        src={imageURL}
        placeholder="blur"
        blurDataURL={parseImage(currentImageID, "placeholder")}
        width={nextImageSize}
        height={nextImageSize}
        alt={alt}
        onClick={handleInputClick}
        className={cn(
          "absolute left-0 top-0 z-0 h-full w-full overflow-hidden object-cover",
          imageClass,
          { "opacity-40": isLoading }
        )}
      /> */}
      {showUploadIcon && (
        <button
          type="button"
          disabled={isLoading || hasError}
          onClick={handleInputClick}
          className={cn(
            "absolute left-[75%] top-[70%] z-20 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-400 p-2 text-black",
            uploadButtonClass
          )}
        >
          <Camera />
        </button>
      )}
    </figure>
  );
};
