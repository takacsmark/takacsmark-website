import {
    AcademicCapIcon,
    Bars3Icon,
    BookOpenIcon,
    PaintBrushIcon,
} from "@heroicons/react/24/outline"

const navigation = [
    { name: "Blog", href: "#", icon: BookOpenIcon, current: false },
    { name: "AI Art Projects", href: "#", icon: PaintBrushIcon, current: false },
    { name: "Docker Book", href: "#", icon: AcademicCapIcon, current: false },
    { name: "More", href: "#", icon: Bars3Icon, current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
}

const Navigation = () => {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item: { name: string, href: string, icon: any, current: boolean }) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-800 text-white"
                                            : "text-gray-600 hover:text-white hover:bg-gray-800",
                                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                    )}
                                >
                                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="-mx-6 mt-auto">
                    <a
                        href="#"
                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                    >
                        <img
                            className="h-8 w-8 rounded-full bg-gray-800"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true">Tom Cook</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
