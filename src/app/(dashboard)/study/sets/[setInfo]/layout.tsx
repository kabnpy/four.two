import { CardSet } from "@/types";
import { sets } from "@/sets/sets";
import { Separator } from "@/components/ui/separator";

export default async function Layout({
  params,
  children,
}: {
  params: { setInfo: string };
  children: React.ReactNode;
}): Promise<React.ReactElement> {
  // const setData = await api.user.getStudySet.query({
  //   slug: params.setInfo[0] || "",
  // });
  const setData: CardSet = sets.filter((set) => set.slug == params.setInfo)[0]!;
  if (!setData) {
    return <div>Set not found</div>;
  }
  return (
    <div>
      <div className="p-8 py-10">
        <h1 className="text-3xl font-bold tracking-tight">{setData.title}</h1>
        <p className="mt-2 text-muted-foreground">{setData.description}</p>
      </div>
      <Separator />
      <div className="flex w-full gap-8 p-8 py-10">
        <div className="max-w-full grow">{children}</div>
      </div>
    </div>
  );
}
