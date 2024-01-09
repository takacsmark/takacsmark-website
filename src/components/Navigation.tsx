import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  AdjustmentsVerticalIcon,
  ArrowUturnLeftIcon,
  Bars3Icon,
  BookOpenIcon,
  BookmarkIcon,
  ChevronDownIcon,
  InformationCircleIcon,
  ShieldCheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, createElement, useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = ({ config }) => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="-mt-[2px] inline-flex gap-x-1.5 text-lg hover:underline">
        {config.name}
        <ChevronDownIcon
          className="mt-[4px] h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          {config.children.map((child) => (
            <Menu.Item>
              <a
                href={child.href}
                className={classNames(
                  child.current
                    ? "bg-gray-100 text-gray-900 "
                    : "text-gray-800 ",
                  "group flex items-center px-4 py-2 text-md hover:underline cursor-pointer",
                )}
              >
                {createElement(child.icon, {
                  className:
                    "mr-3 h-5 w-5 text-purple-600 group-hover:text-purple-800",
                  ariaHidden: true,
                })}
                {child.name}
              </a>
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
);

const navigation = [
  { name: "Portfolio", href: "/portfolio", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Shop", href: "/shop", current: false },
  {
    name: "More",
    current: false,
    children: [
      {
        name: "About Me",
        href: "/about",
        current: false,
        icon: InformationCircleIcon,
      },
      {
        name: "Terms & Conditions",
        href: "/terms-of-service",
        current: false,
        icon: BookmarkIcon,
      },
      {
        name: "Privact Policy",
        href: "/privacy-policy",
        current: false,
        icon: ShieldCheckIcon,
      },
      {
        name: "Return & Refund Policy",
        href: "/return-refund-policy",
        current: false,
        icon: ArrowUturnLeftIcon,
      },
      {
        name: "Cookie Settings",
        href: "/cookie-settings",
        current: false,
        icon: AdjustmentsVerticalIcon,
      },
      {
        name: "Docker Book",
        href: "/get-started-with-docker-in-your-projects-through-examples",
        current: false,
        icon: BookOpenIcon,
      },
    ],
  },
];

type NavBarProps = {
  setMobileMenuOpen: (arg0: boolean) => void;
  topNavigationScrollPX: number;
};

const NavBar: React.FC<NavBarProps> = ({
  setMobileMenuOpen,
  topNavigationScrollPX,
}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > topNavigationScrollPX);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full flex items-center justify-between p-6 lg:px-8 ${
        isSticky
          ? "bg-white shadow-lg transition-colors duration-150"
          : "bg-transparent"
      } z-50`}
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">takacsmark.com</span>
          <img
            className="h-8 w-auto"
            src={"/images/Savalera-White-Logo+Name.svg"}
            alt=""
          />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
            isSticky ? "text-gray-800" : ""
          } `}
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) =>
          item.children === undefined ? (
            <a
              key={item.name}
              href={item.href}
              className="text-lg leading-6 hover:underline underline-offset-4"
            >
              {item.name}
            </a>
          ) : (
            <Dropdown config={item} />
          ),
        )}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
    </nav>
  );
};

type SlideInNavigationProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (arg0: boolean) => void;
};

const SlideInNavigation: React.FC<SlideInNavigationProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Savalera</span>
            <img
              className="h-8 w-auto"
              src="/images/Savalera-White-Logo+Name.svg"
              alt=""
            />
          </a>
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/25">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 hover:underline underline-offset-4"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

type TopNavigationProps = {
  topNavigationScrollPX: number;
};

const TopNavigation: React.FC<TopNavigationProps> = ({
  topNavigationScrollPX,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <NavBar
          setMobileMenuOpen={setMobileMenuOpen}
          topNavigationScrollPX={topNavigationScrollPX}
        />
        <SlideInNavigation
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </header>
    </>
  );
};

export default TopNavigation;
