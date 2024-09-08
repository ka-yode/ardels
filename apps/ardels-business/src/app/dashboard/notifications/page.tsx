import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import { cn } from "@repo/ui/utils";
import Image from "next/image";

export default function NotificationPage() {
  return (
    <div className="flex flex-col items-center rounded-md lg:bg-white lg:p-8">
      <Tabs
        defaultValue="all"
        className="flex w-full flex-col items-center gap-10"
      >
        <TabsList className="grid h-10 grid-cols-2 rounded-md bg-neutral-50 font-semibold lg:w-2/6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="w-full self-start">
          <NotificationSummary
            image="/signup/lojay.png"
            title="Tunde Adebayo passed verification"
            summary="Passed all the required verification"
            failed
          />
        </TabsContent>
        <TabsContent value="verification">verification</TabsContent>
      </Tabs>
    </div>
  );
}
interface NotificationSummaryProps {
  image: string;
  title: string;
  summary: string;
  failed?: boolean;
}
const NotificationSummary = ({
  image,
  title,
  summary,
  failed,
}: NotificationSummaryProps) => {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-3 p-4 duration-300 hover:bg-neutral-50 hover:shadow lg:gap-5",
        failed && "text-red-500"
      )}
    >
      <Image
        src={image}
        alt=""
        width={80}
        height={80}
        className="size-14 rounded-full lg:size-20"
      />
      <div className="flex flex-col justify-between gap-2 lg:gap-4">
        <p className="text-xs font-semibold lg:text-base">{title}</p>
        <p className="text-xs font-light text-gray-500 lg:text-base">
          {summary}
        </p>
      </div>
    </div>
  );
};
