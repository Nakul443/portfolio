"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  MonitorSmartphone,
  Sparkles,
  Briefcase,
  FolderKanban,
  Mail,
  User,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";

export function DockBar() {
  return (
    <Dock className="fixed top left-1/2 -translate-x-1/2 z-50">
      <DockIcon>
        <Link href="#hero" className="relative group flex flex-col items-center">
          <MonitorSmartphone className="h-6 w-6" />
          <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Home
          </span>
        </Link>
      </DockIcon>

      <DockIcon>
        <Link href="#about" className="relative group flex flex-col items-center">
          <User className="h-6 w-6" />
          <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            About
          </span>
        </Link>
      </DockIcon>

      <DockIcon>
        <Link href="#education" className="relative group flex flex-col items-center">
          <GraduationCap className="h-6 w-6" />
          <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Education
          </span>
        </Link>
      </DockIcon>

      <DockIcon>
        <Link href="#skills" className="relative group flex flex-col items-center">
          <Sparkles className="h-6 w-6" />
          <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Skills
          </span>
        </Link>
      </DockIcon>

      <DockIcon>
        <Link href="#experience" className="relative group flex flex-col items-center">
          <Briefcase className="h-6 w-6" />
          <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Experience
          </span>
        </Link>
      </DockIcon>

      <DockIcon>
        <Link href="#projects" className="relative group flex flex-col items-center">
          <FolderKanban className="h-6 w-6" />
          <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Projects
          </span>
        </Link>
      </DockIcon>

      <DockIcon>
        <Link href="#contact" className="relative group flex flex-col items-center">
          <Mail className="h-6 w-6" />
          <span className="absolute bottom-[-1.5rem] text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
            Contact
          </span>
        </Link>
      </DockIcon>
    </Dock>
  );
}
