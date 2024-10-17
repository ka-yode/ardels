import { VerifiedIcon } from "lucide-react";

export const EmployeeDetails = () => {
  return (
    <div className="lg:col-span-4 bg-white h-full overflow-y-auto p-6 space-y-8">
      <section className="space-y-6">
        <h2 className="font-bold">Personal Information</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="font-bold">Personal Information</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="font-bold">Personal Information</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
        </div>
      </section>
      <section className="space-y-6">
        <h2 className="font-bold">Personal Information</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
          <Detailsbreakdown title="NIN" value="89282992292" verified />
        </div>
      </section>
    </div>
  );
};
interface DetailsBreakdownProps {
  title: string;
  value: string;
  verified?: boolean;
}
const Detailsbreakdown = ({
  title,
  value,
  verified,
}: DetailsBreakdownProps) => {
  return (
    <div>
      <h6 className="text-black/50">{title}</h6>
      <div className="flex gap-2 items-center">
        <p>{value}</p>
        {verified && (
          <VerifiedIcon
            size={25}
            className="text-white"
            fill="lime"
            fillRule="evenodd"
          />
        )}
      </div>
    </div>
  );
};
