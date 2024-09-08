"use client";
import Image from "next/image";
import { Button, buttonVariants } from "@repo/ui/button";
import Link from "next/link";
import { cn } from "@repo/ui/utils";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="mt-32 text-center md:mt-40">
        <div className="bg-gradient-to-t from-white from-20% via-sky-400 to-white to-95%">
          <section className="flex flex-col items-center gap-10 p-4">
            <p className="text-3xl font-semibold leading-relaxed lg:w-5/12">
              Streamline Employee Verification and Payment Management
            </p>
            <p className="leading-loose lg:w-[47%]">
              Simplify employee verification and streamline management
              processes. Ensure secure, timely payments—all on one convenient
              platform. Enhance productivity and trust within your team.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="auth/signup"
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Get Started
              </Link>
              <Button className="bg-white/70 text-black duration-300 hover:bg-white">
                Download our app
              </Button>
            </div>
            <div className="hidden lg:block">
              <Image src="/heroImage.png" alt="" height={500} width={900} />
            </div>
          </section>
        </div>
        <section className="mt-32 flex flex-col items-center gap-20 px-4 text-black/60 md:mt-52 md:px-56">
          <div className="flex flex-col items-center gap-4">
            <p className="font-semibold text-black">
              Our Comprehensive Services
            </p>
            <p className="leading-relaxed lg:w-[52%]">
              Discover how our platform can simplify your workforce management
              with robust verification processes, efficient payment handling.
            </p>
          </div>
          <div className="grid items-center justify-between gap-12 md:gap-28 lg:grid-cols-2">
            <div className="text-left">
              <p className="text-lg font-semibold text-black">
                <span className="text-sky-500">Employee</span> Verification
              </p>
              <p>
                Our comprehensive employee verification service conducts
                thorough background checks, validates guarantor and credentials.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="hidden w-max items-end justify-end lg:flex">
                <Image
                  src="/verification.png"
                  alt=""
                  height={500}
                  width={500}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Image src="/qualified.png" alt="" width={500} height={500} />
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-sky-500">
                Access a Qualified and Verified Workforce
              </p>
              <p>
                Tap into our extensive pool of workers all thoroughly verified
                and ready to meet your construction industry needs
              </p>
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-sky-500">
                Rate and review
              </p>
              <p>
                Our platform allows you to rate and review your employees
                performance to help other employers in making decisions
              </p>
            </div>
            <div className="relative flex justify-end">
              <Image src="/rate.png" alt="" height={500} width={500} />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 rounded-3xl bg-black bg-[url(/platformPattern.png)] p-6 text-white md:p-32">
            <p className="text-xl font-semibold capitalize md:text-2xl">
              access our platform anytime, anywhere
            </p>
            <p className="md:w-3/5">
              Download our app from the Apple Store and Google Play Store to
              easily verify and manage your employees on the go
            </p>
            <div className="flex items-center gap-2">
              <DownloadButton
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="size-6"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                }
                platform="GooglePlay"
              />
              <DownloadButton
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="size-6"
                  >
                    <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z" />
                  </svg>
                }
                platform="App Store"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

interface downloadButtonProps {
  icon: React.ReactNode;
  platform: string;
}
const DownloadButton = ({ platform, icon }: downloadButtonProps) => {
  return (
    <Button
      className="bg-white py-6 text-black hover:bg-white/90"
      leftIcon={icon}
    >
      <div className="flex flex-col justify-start text-left">
        <p>Download</p>
        <p>
          on <span className="font-semibold">{platform}</span>
        </p>
      </div>
    </Button>
  );
};
