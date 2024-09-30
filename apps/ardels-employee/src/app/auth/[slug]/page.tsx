import { buttonVariants } from "@repo/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AcceptInvitePage() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-2 items-center">
        <Image
          src="/ardelswhite.png"
          alt="Ardels White Logo"
          width={30}
          height={30}
        />
        <p className="text-xl font-black text-white">ARDELS</p>
      </div>
      <div className="bg-white rounded-xl flex flex-col gap-6 items-center text-black py-20 px-24">
        <div className="space-y-6">
          <p className="text-2xl font-semibold  text-center">
            Join your company on ardels
          </p>
          <p className="text-black/60 line-clamp-2">
            44bukaz has inivted you to use ardels and you will be required to
            provide information about you to join.
          </p>
          <p className="text-black/60">
            Please ensure you have the following before clicking the "Accept
            Invite" button
          </p>
        </div>
        <ul className=" list-disc list-inside self-start">
          <li>Clear Passport</li>
          <li>National Identity number(NIN)</li>
          <li>Valid House Address</li>
          <li>2 guarantor Informations</li>
          <li> Utility Bill</li>
        </ul>
        <Link
          href="1/join-company"
          className={`${buttonVariants({ variant: "action" })} w-4/5`}
        >
          Accept Invite
        </Link>
      </div>
    </div>
  );
}
