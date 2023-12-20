import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Portfolio", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Shop", href: "/", current: false },
  {
    name: "More",
    current: false,
    children: [
      { name: "About Me", href: "#", current: false },
      { name: "Terms & Conditions", href: "#", current: false },
      { name: "Privact Policy", href: "#", current: false },
      { name: "Return & Refund Policy", href: "#", current: false },
      { name: "Cookie Settings", href: "#", current: false },
      { name: "Docker Book", href: "#", current: false },
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
          ? "bg-white dark:bg-black shadow-lg transition-colors duration-150"
          : "bg-transparent"
      } z-50`}
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Savalera</span>
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
            isSticky ? "text-gray-800 dark:text-white" : "dark:text-gray-200"
          } `}
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-lg leading-6 hover:underline underline-offset-4 ${
              isSticky ? "text-black dark:text-white" : "dark:text-white"
            } `}
          >
            {item.name}
          </a>
        ))}
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
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
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
            className="-m-2.5 p-2.5 text-gray-400 dark:text-white"
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
                  className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 dark:hover:bg-gray-950 hover:underline underline-offset-4"
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
