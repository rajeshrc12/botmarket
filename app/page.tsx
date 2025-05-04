import SignIn from "@/components/sign-in";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between shadow px-2 py-4">
        <div className="font-bold">BotMarket</div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Get Started</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
            </DialogHeader>
            <SignIn />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex justify-center w-full h-[80vh] items-center">
        <h1 className="font-bold text-4xl">Buy your fav bot</h1>
      </div>
    </div>
  );
}
