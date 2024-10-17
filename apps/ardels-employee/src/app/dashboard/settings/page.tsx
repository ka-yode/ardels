import { Button } from "@repo/ui/button";

export default function EmployeeSettingsPage() {
  return (
    <div className="bg-white rounded-sm h-full overflow-y-auto p-8">
      <div className="flex items-start justify-between">
        <div className="space-y-4">
          <h3 className="text-2xl">Update your information</h3>
          <p className="text-black/50 line-clamp-2">
            Any information update will require re-verifying your information.{" "}
          </p>
        </div>
        <Button variant="action">Change Password</Button>
      </div>
    </div>
  );
}
