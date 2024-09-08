function PersonalDetails() {
  return (
    <div className="flex w-full flex-1 flex-col gap-16 rounded-lg bg-white p-4 shadow">
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Personal Information</p>
        <div className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2 lg:grid-cols-3">
          <DetailsBreakdown heading="NIN" value="***********" />
          <DetailsBreakdown
            heading="Address"
            value="No 9 Alebiosu Close Oluyole"
          />
          <DetailsBreakdown heading="Date of Birth" value="20/12/2001" />
          <DetailsBreakdown heading="State of origin" value="Ogun State" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Work Experience</p>
        <div>
          <p className="text-sm text-neutral-300">2024-Present</p>
          <p className="font-semibold">44 Bukaz</p>
          <p className="text-sm font-light">
            Good employee and very trustworthy
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold">Guarantors Information</p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <DetailsBreakdown heading="Name" value="Tunde John" />
          <DetailsBreakdown heading="Address" value="5 under bridge dugbe" />
          <DetailsBreakdown heading="Phone Number" value="0804487238" />
          <DetailsBreakdown heading="Relationship" value="Brother" />
        </div>
      </div>
    </div>
  );
}

interface DetailsBreakdownProps {
  heading: string;
  value: string;
}
function DetailsBreakdown({ heading, value }: DetailsBreakdownProps) {
  return (
    <div>
      <p className="text-neutral-300">{heading}</p>
      <p>{value}</p>
    </div>
  );
}
export default PersonalDetails;
