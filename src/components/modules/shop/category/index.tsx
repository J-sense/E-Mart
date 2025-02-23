"use client";

// import { useState } from "react";
import { TCategory } from "@/types";
import CategoryModel from "./CategoryModel";
import { NMTable } from "@/components/ui/core/NMtable/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import { DeleteCategory } from "@/services/category";
import { toast } from "sonner";
// import DeleteMdel from "./DeleteMdel";

const ManageCategory = ({ categories }: { categories: TCategory[] }) => {
  // const [deleteItem, setDeleteItem] = useState<TCategory | null>(null);

  const handleDeleteClick = async (category: TCategory) => {
    console.log(category);
    try {
      const res = await DeleteCategory(category._id);

      console.log(res);

      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    } // Open delete modal with selected category
  };

  const columns: ColumnDef<TCategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDeleteClick(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Manage Categories</h1>
        <CategoryModel />
      </div>
      <div>
        <NMTable data={categories} columns={columns} />
      </div>

      {/* Render DeleteMdel when deleteItem is not null */}
    </>
  );
};

export default ManageCategory;
