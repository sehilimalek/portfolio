import { Button } from "@/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/_components/ui/dropdown-menu";
import Image from "next/image";

export function LangToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <p className="font-semibold">En</p>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="flex items-center justify-between">
          <Image
            alt="USA"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            width={40}
            height={40}
          />
          <p>English</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between">
          <Image
            alt="France"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
            width={40}
            height={40}
          />
          <p>Francais</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between">
          <Image
            alt="Arabic"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/DZ.svg"
            width={40}
            height={40}
          />
          <p>عربية</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
