import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@ui/dialog";
import { Button } from "@ui/button";
import githubLogo from "public/github.svg";

export function LoginDialog() {
	return (
		<Dialog>
			<DialogTrigger>
				<Button>Logg inn</Button>
			</DialogTrigger>
			<DialogContent>
				<Button className="flex w-full max-w-md items-center justify-center gap-1 rounded-lg bg-gray-600 px-4 py-2 text-center font-semibold text-base text-white shadow-md transition duration-200 ease-in hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-200">
					<img src={githubLogo.src} alt="GitHub logo" width={24} height={24} />
					Sign in with GitHub
				</Button>
			</DialogContent>
		</Dialog>
	);
}
