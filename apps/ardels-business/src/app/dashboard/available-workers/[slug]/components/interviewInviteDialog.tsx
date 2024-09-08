"use client";
import { Button } from "@repo/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@repo/ui/dialog";
import { useToast } from "@repo/ui/use-toast";

function InterviewInviteDialog() {
  const { toast } = useToast();
  const sentToast = () => {
    toast({ title: "Invite sent succesfully", variant: "success" });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="greyscale">Invite for Interview</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col gap-4 text-center leading-relaxed">
          <p className="text-lg font-semibold">Are you sure</p>
          <p>
            You are about to send an invite to this person, please confirm
            before we continue.
          </p>
        </div>
        <DialogFooter>
          <DialogClose className="w-full">
            <Button variant="action" className="w-full" onClick={sentToast}>
              Confirm Invite
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default InterviewInviteDialog;
