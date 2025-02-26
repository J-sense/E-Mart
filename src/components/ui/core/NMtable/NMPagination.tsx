import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../../button";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NMPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pathName = usePathname();
  const router = useRouter();
  console.log(pathName);
  console.log(currentPage);
  const totalPage = 10;
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleAfter = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="flex gap-3 items-center mt-2">
      <Button
        className=""
        variant="outline"
        disabled={currentPage == 1}
        onClick={() => {
          handlePrev();
          router.push(`${pathName}?page=${currentPage}`);
        }}
      >
        <ArrowLeft />
      </Button>
      <div className="flex gap-2">
        {[...Array(totalPage)].map((_, index) => (
          <Button
            key={index}
            variant={currentPage === index + 1 ? "default" : "outline"}
            onClick={() => {
              setCurrentPage(index + 1);
              router.push(`${pathName}?page=${index + 1}`);
            }}
          >
            {index + 1}
          </Button>
        ))}
      </div>
      <Button
        variant="outline"
        onClick={handleAfter}
        disabled={currentPage == totalPage}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default NMPagination;
