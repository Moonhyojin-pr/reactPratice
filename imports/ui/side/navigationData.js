// navigationData.js
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react"
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid"

export const navigation = [
  { name: "Awards", href: "/", icon: HomeIcon, current: true },
  { name: "Memorial", href: "/Memorial", icon: UsersIcon, current: false },
  { name: "Message", href: "/Message", icon: FolderIcon, current: false },
  { name: "About", href: "/About", icon: CalendarIcon, current: false },
  // { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  // { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
]

export const teams = [
  // { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  // { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  // { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
]

export const userNavigation = [
  // { name: "Your profile", href: "#" },
  // { name: "Sign out", href: "#" },
]
