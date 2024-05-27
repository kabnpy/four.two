import NewSet from "@/components/new-set";
import { MenuCard } from "@/components/menu-card";
import { Separator } from "@/components/ui/separator";

import { sets } from "@/sets/sets";

export default async function Page(): Promise<React.ReactElement> {
  return (
    <div className="p-8 py-10">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Study Sets</h2>
        <NewSet></NewSet>
      </div>
      <Separator className="mt-4" />
      <div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
        {sets.map((set) => {
          return <MenuCard cardSet={set} key={set.slug} />;
        })}
      </div>
    </div>
  );
}
