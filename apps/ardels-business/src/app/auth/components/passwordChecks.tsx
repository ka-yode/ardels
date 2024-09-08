import { CircleCheck, CircleX } from "lucide-react";

interface PasswordChecksProps {
  hasLowercase: boolean;
  hasUppercase: boolean;
  stringCount: number;
  hasNumeric: boolean;
}
export default function PasswordChecks({
  hasLowercase,
  hasUppercase,
  stringCount,
  hasNumeric,
}: PasswordChecksProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <PassWordCheck isTrue={hasLowercase} checkTitle="Lower Case Character" />
      <PassWordCheck isTrue={hasUppercase} checkTitle="Upper Case Character" />
      <PassWordCheck isTrue={stringCount >= 8} checkTitle="8 Characters" />
      <PassWordCheck isTrue={hasNumeric} checkTitle="Numbers" />
    </div>
  );
}

function PassWordCheck({
  isTrue,
  checkTitle,
}: {
  isTrue: boolean;
  checkTitle: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {isTrue ? (
        <div>
          <CircleCheck
            size={25}
            className="text-neutral-100"
            fill="green"
            fillRule="evenodd"
          />
        </div>
      ) : (
        <div>
          <CircleX size={25} fill="red" className="text-neutral-100" />
        </div>
      )}
      <p className="text-black/50">{checkTitle}</p>
    </div>
  );
}
