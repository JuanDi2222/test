import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export function TopNav(){
    return (
    <nav className="bg-white border-b-2">
        <div className="container flex items-center justify-start p-6 mx-auto text-black ">
            <img className="w-15 h-10 mx-1.5 sm:mx-6" src="https://utfs.io/f/8a64b2c5-4781-4ba7-b9bd-fc1046c7bee0-b1zubm.png"/>
            <a href="#" className="text-black dark:text-black border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>
            <a href="#" className="border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-blue-500 mx-1.5 sm:mx-6">Export</a>
            <a href="#" className="border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-blue-500 mx-1.5 sm:mx-6">Import</a>
            <a href="#" className="border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-blue-500 mx-1.5 sm:mx-6">Admin</a>
            <div className="border-b-2 border-transparent hover:text-black dark:hover:text-black hover:border-blue-500 mx-1.5 sm:mx-6">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                
                </div>
        </div>
    </nav>
    );
    }