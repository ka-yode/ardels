export default function AuthLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <main className="h-screen w-full bg-action p-10">{children}</main>;
}
