import { Button, buttonVariants } from "@repo/ui/button";
import { cn } from "@repo/ui/utils";
import Link from "next/link";

function AcceptInvite() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-full flex-col gap-5 rounded-xl bg-white p-6 py-14 lg:h-max lg:w-1/2 lg:p-20">
        <div>
          <div className="flex flex-col gap-5 text-black/50">
            <p className="text-center text-2xl font-semibold text-black">
              Join your company on ardels
            </p>
            <p>
              44bukaz has inivted you to use ardels and you will be required to
              provide information about you to join.
            </p>
            <p>Please ensure you have the following</p>
          </div>
          <ul className="mt-4 flex list-disc flex-col gap-4 px-5">
            <li>Clear Passport</li>
            <li>National Identity number(NIN)</li>
            <li>Valid House Address</li>
            <li>2 guarantor Informations</li>
            <li>Utility Bill</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link
            className={cn(
              "w-full lg:w-4/5",
              buttonVariants({ variant: "action" })
            )}
            href="setup"
          >
            Accept Invite
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AcceptInvite;
