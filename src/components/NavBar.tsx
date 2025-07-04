"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import siteLogo from "../assets/takacsmark-logo-color.svg";

const navigation = [
  {
    name: "Newsletter",
    href: "https://takacsmark.substack.com",
    type: "internal",
  },
  { name: "Links", href: "https://linktr.ee/takacsmark", type: "external" },
  {
    name: "Savalera Agentic Lab",
    href: "https://savalera.com",
    type: "external",
  },
];

export default function Footer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 flex-row">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">takacsmark.com</span>
              <img
                alt="takacsmark.com"
                src={siteLogo.src}
                className="h-8 w-auto rounded-md"
              />
              <span className="ml-4 font-logo font-black text-l item">
                takacsmark.com
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900"
                target={item.type === "external" ? "_blank" : "_self"}
              >
                <div className="flex flex-row items-center gap-1">
                  {item.name}
                  {item.type === "external" && (
                    <ArrowTopRightOnSquareIcon className="size-4" />
                  )}
                </div>
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5 flex">
                <span className="sr-only">takacsmark.com</span>
                <img
                  alt="takacsmark.com"
                  src={siteLogo.src}
                  className="h-8 w-auto rounded-md"
                />
                <span className="ml-4 font-logo font-black text-l">
                  takacsmark.com
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      target={item.type === "external" ? "_blank" : "_self"}
                    >
                      <div className="flex flex-row items-center gap-1">
                        {item.name}
                        {item.type === "external" && (
                          <ArrowTopRightOnSquareIcon className="size-4" />
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
