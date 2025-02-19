/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction } from "react";
import { Input } from "../../input";
type TImagesProps = {
  label?: string;
  setImageFiles: React.Dispatch<SetStateAction<[] | File[]>>;
  setImagePreview: React.Dispatch<SetStateAction<string[] | []>>;
};
const NMImageUploader = ({ setImageFiles, setImagePreview }: TImagesProps) => {
  // const [imagePreviewer, setImagePreviewer] = useState<string[] | []>([]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files![0];
    setImageFiles((prev) => [...prev, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    }
    e.target.value = "";
  };

  return (
    <>
      <div className="flex flex-col items-center w-full gap-4">
        <Input
          id="image-upload"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageChange}
        />
        <label
          htmlFor="image-upload"
          className="w-full h-36 md:size-36 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-gray-50 transition"
        >
          Upload Logo
        </label>
        <div></div>
      </div>
    </>
  );
};
export default NMImageUploader;
