"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { NMTable } from "@/components/ui/core/NMtable/NMTable";
import { IProduct } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Delete, Edit, LucideView } from "lucide-react";
// import { Trash } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Products({ categories }: { categories: IProduct[] }) {
  const [selectedIds, setSelectedIds] = useState<string[] | []>([]);
  console.log(selectedIds);
  //   const handleDeleteClick = (data) => {
  //     console.log(data);
  //   };
  const columns: ColumnDef<IProduct>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            if (value) {
              setSelectedIds((prev) => [...prev, row.original._id]);
            } else {
              setSelectedIds(
                selectedIds.filter((id) => id !== row.original._id)
              );
            }
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Name",
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
      accessorKey: "isActive",
      header: () => <div className="text-center">Action</div>,
      cell: () => (
        <div className="flex gap-4 items-center justify-center">
          <button className="text-green-500 border bg-green-100 text-center px-1 rounded">
            <Edit />
          </button>
          <button className="text-green-500 border bg-green-100 text-center px-1 rounded">
            <Delete />
          </button>
          <button className="text-green-500 border bg-green-100 text-center px-1 rounded">
            <LucideView />
          </button>
        </div>
      ),
    },
    // {
    //   accessorKey: "action",
    //   header: () => <div>Action</div>,
    //   cell: ({ row }) => (
    //     <button
    //       className="text-red-500"
    //       title="Delete"
    //       onClick={() => handleDeleteClick(row.original)}
    //     >
    //       <Trash className="w-5 h-5" />
    //     </button>
    //   ),
    // },
  ];
  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold ">Create Product</h1>
        <Link href={"/user/shop/products/add-product"}>
          <Button variant="outline"> Add Product</Button>
        </Link>
      </div>
      <div>
        <NMTable data={categories} columns={columns} />
      </div>
    </>
  );
}

export default Products;
