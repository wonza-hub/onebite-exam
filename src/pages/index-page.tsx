import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ButtonGroupText } from "@/components/ui/button-group";

export default function IndexPage() {
  return (
    <div>
      <h1>Index Page</h1>
      <ButtonGroupText>
        <ButtonGroupText>
          <Label htmlFor="name">Text</Label>
        </ButtonGroupText>
        <Input placeholder="Type something here..." id="name" />
      </ButtonGroupText>
    </div>
  );
}
