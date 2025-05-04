import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between shadow px-2 py-4">
        <div className="font-bold">BotMarket</div>
        <Button>Get Started</Button>
      </div>
      <div className="flex justify-center w-full h-[80vh] items-center">
        <h1 className="font-bold text-4xl">Buy your fav bot</h1>
      </div>
    </div>
  );
}
