import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";

export default function TokenInput({
    id,
    label,
    placeholder,
    textEnd,
    height,
}: {
    id: string;
    label: string;
    placeholder: string;
    textEnd?: string;
    height?: number;
}) {
    return (
        <div className="m-6 bg-transparent">
            <InputGroup className={cn("border-foreground/10 border-2 rounded-4xl p-3", `min-h-${height ?? ""}`)}>
                <InputGroupAddon align="block-start">
                    <Label htmlFor="amount-sell" className="text-foreground/65 text-xl">
                        {label}
                    </Label>
                </InputGroupAddon>
                <InputGroupInput id={id} placeholder={placeholder} className="!text-3xl font-medium" />
                <InputGroupAddon align="block-end">
                    <InputGroupText className="text-muted-foreground text-lg">
                        {textEnd}
                    </InputGroupText>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}