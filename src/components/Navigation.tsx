import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import type { ReactElement } from "react";

const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Categories", href: "#", current: false },
    { name: "Tags", href: "#", current: false },
    { name: "Docker Book", href: "#", current: false },
    {
        name: "More",
        current: false,
        children: [
            { name: "About Me", href: "#", current: false },
            { name: "Terms & Conditions", href: "#", current: false },
            { name: "Privact Policy", href: "#", current: false },
            { name: "Return & Refund Policy", href: "#", current: false },
            { name: "Cookie Settings", href: "#", current: false },
        ],
    },
];

const social = [
    {
        name: "Instagram",
        href: "https://instagram.com/takacsmarkCreative",
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "X",
        href: "https://x.com/takacsmark",
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/takacsmark",
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "YouTube",
        href: "https://youtube.com/takacsmark",
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/takacsmark",
        icon: (props: any) => (
            <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                />
            </svg>
        ),
    },
    {
        name: "Email",
        href: "mailto:mark@takacsmark.com",
        icon: (props: any) => (
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                    clip-rule="evenodd"
                />
            </svg>
        ),
    },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

const Navigation = () => {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                            <li key={item.name}>
                                {!item.children ? (
                                    <a
                                        href={item.href}
                                        className={classNames(
                                            item.current ? "bg-gray-50" : "hover:bg-gray-50",
                                            "block rounded-md py-2 pr-2 pl-10 text-sm leading-6 font-semibold text-gray-700"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ) as ReactElement<any> : (
                                    <Disclosure as="div">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button
                                                    className={classNames(
                                                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                                                        "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-700"
                                                    )}
                                                >
                                                    {/* @ts-expect-error Server Component */}
                                                    <ChevronRightIcon
                                                        className={classNames(
                                                            open ? "rotate-90 text-gray-500" : "text-gray-400",
                                                            "h-5 w-5 shrink-0"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Disclosure.Button>
                                                <Disclosure.Panel as="ul" className="mt-1 px-2">
                                                    {item.children.map((subItem) => (
                                                        <li key={subItem.name}>
                                                            <Disclosure.Button
                                                                as="a"
                                                                href={subItem.href}
                                                                className={classNames(
                                                                    subItem.current ? "bg-gray-50" : "hover:bg-gray-50",
                                                                    "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-700"
                                                                )}
                                                            >
                                                                {subItem.name}
                                                            </Disclosure.Button>
                                                        </li>
                                                    )) as ReactElement<any>[]}
                                                </Disclosure.Panel>
                                            </>
                                        ) as ReactElement<any>}
                                    </Disclosure>
                                )}
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="-mx-2 mt-auto mb-4 p-2">
                    <div className="flex justify-evenly">
                        {social.map((item) => (
                            <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400" target="_blank">
                                <span className="sr-only">{item.name}</span>
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
