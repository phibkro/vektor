import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@ui/dropdown-menu";

export function UserMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>shadcn</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Kontrollpanel</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Min side</DropdownMenuItem>
				<DropdownMenuItem>Profil</DropdownMenuItem>
				<DropdownMenuItem>Utlegg</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Logg ut</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
