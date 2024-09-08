import { Button } from "@repo/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@repo/ui/dialog";
import { Textarea } from "@repo/ui/textarea";

function RemoveEmployeeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" className="flex-1">
          Remove
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Remove Employee</DialogHeader>
        <DialogDescription>
          Whether an employee wishes to leave or you need to terminate their
          employment
        </DialogDescription>
        <div>
          <Textarea
            placeholder="Add Comment"
            rows={6}
            className="resize-none"
          />
        </div>
        <DialogClose>
          <Button variant="destructive" className="w-full">
            Remove
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default RemoveEmployeeDialog;
