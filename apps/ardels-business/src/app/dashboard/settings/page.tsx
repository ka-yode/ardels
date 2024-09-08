"use client";
import UpdateProfile from "./components/updateProfile";
import UpdatePassword from "./components/updatePassword";

function Settings() {
  return (
    <div className="flex flex-col gap-10 rounded-lg lg:bg-white">
      <section className="flex flex-col gap-4 rounded-lg lg:p-14 lg:pb-0">
        <div>
          <p className="mb-4 text-2xl">Edit your Company Profile</p>
          <p className="line-clamp-2 text-black/50">
            Establish Your Business Identity and Optimize Employee Management.
          </p>
        </div>
        <UpdateProfile />
      </section>
      <section className="flex flex-col gap-4 rounded-lg lg:p-14">
        <p className="mb-4 text-2xl">Update Password</p>
        <UpdatePassword />
      </section>
    </div>
  );
}

export default Settings;
