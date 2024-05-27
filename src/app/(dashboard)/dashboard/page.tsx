import { Separator } from "@/components/ui/separator";
import { FileUploadDialog } from "@/components/upload-dialog";

import fs from "node:fs/promises";
import FileCard from "@/components/file-card";

export default async function Dashboard() {
  const files = await fs.readdir("./public/uploads");
  const docs = files
    .filter((file) => file.endsWith(".pdf"))
    .map((file) => `${file}`);

  return (
    <div className="p-8 py-10">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <FileUploadDialog />
      </div>
      <Separator className="mt-4" />
      <div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {docs.map((doc) => {
          return <FileCard file={doc} key={doc} />;
        })}
      </div>
    </div>
  );
}
