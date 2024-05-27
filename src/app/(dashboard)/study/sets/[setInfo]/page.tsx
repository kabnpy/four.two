import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Flashcard } from "@/components/flashcard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, LayoutGrid, GalleryHorizontal } from "lucide-react";

import { sets } from "@/sets/sets";
import { CardSet } from "@/types";

export function generateStaticParams(): { slug: string }[] {
  return sets.map((set) => {
    return { slug: set.slug };
  });
}

export default function Page({
  params,
}: {
  params: { setInfo: string };
}): React.ReactElement {
  // const setData = await api.set.getBySlug
  //   .query({ slug: params.slug })
  //   .catch(() => {
  //     console.error(`Something went wrong when fetching set ${params.slug}!`);
  //   });
  const setData: CardSet = sets.filter((set) => set.slug == params.setInfo)[0]!;
  return (
    <Tabs defaultValue="grid" className="min-h-screen">
      <div className="flex min-h-screen flex-col gap-2 lg:gap-6 xl:gap-8">
        <div className="flex items-center justify-start">
          <TabsList className="h-max p-1">
            <TabsTrigger value="grid">
              <LayoutGrid className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="stack">
              <GalleryHorizontal className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="grid">
          <div className="xl:gird-cols-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-6 xl:grid-cols-3 xl:gap-8">
            {setData
              ? setData.cards.map((card) => {
                  return <Flashcard card={card} key={card.front.heading} />;
                })
              : null}
          </div>
        </TabsContent>
        <TabsContent value="stack" className="relative h-full flex-grow">
          <div className="flex w-full flex-row items-center justify-center">
            <Carousel className="w-full max-w-2xl py-8 pb-10">
              <CarouselContent>
                {setData
                  ? setData.cards.map((card) => {
                      return (
                        <CarouselItem key={card.front.heading}>
                          <div className="flex items-center justify-center px-10 py-2">
                            <Flashcard card={card} />
                          </div>
                        </CarouselItem>
                      );
                    })
                  : null}
              </CarouselContent>
              <CarouselPrevious className="absolute" />
              <CarouselNext className="absolute" />
            </Carousel>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
