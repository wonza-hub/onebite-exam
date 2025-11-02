import { cn } from "@/lib/utils";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Toaster, toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./components/ui/popover";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./components/ui/alert-dialog";
import { ChefHat } from "lucide-react";

function App() {
  const isActive = true;
  return (
    <>
      <div className={cn("h-10 w-10 bg-red-500", isActive && "bg-blue-500")}>
        isActive
      </div>

      {/* 토스터 */}
      <Toaster />

      {/* 아이콘 */}
      <ChefHat />

      {/* 캐러셀 */}
      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem>1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* 팝오버 */}
      <Popover>
        <PopoverTrigger>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>
          <p>Hello World</p>
        </PopoverContent>
      </Popover>

      {/* 모달 */}
      <Dialog>
        <DialogTrigger>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hello World</DialogTitle>
          </DialogHeader>
          <p>Hello World</p>
        </DialogContent>
      </Dialog>

      {/* 알림 모달 */}
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Open</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hello World</AlertDialogTitle>
          </AlertDialogHeader>
          <p>Hello World</p>
        </AlertDialogContent>
      </AlertDialog>

      {/* 버튼 */}
      <Button
        variant="destructive"
        onClick={() => {
          toast("Hello World");
        }}
      >
        Click me
      </Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>

      {/* 인풋 */}
      <Input placeholder="Enter your name" />

      {/* 텍스트영역 */}
      <Textarea placeholder="Enter your name" />
      <h1 className="text-3xl font-bold text-red-500 underline">Hello World</h1>
    </>
  );
}

export default App;
