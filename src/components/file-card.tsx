import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";


export default function FileCard({file, ...props}: {file: string}) {
  return (
    <Link href={`/dashboard/${file}`}>
      <Card className="min-h-min w-full min-w-full max-w-[580px] flex-row gap-6 md:flex p-4">
        <CardContent>
          {file}
        </CardContent>
      </Card>
    </Link>
  );
}
