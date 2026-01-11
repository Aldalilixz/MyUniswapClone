import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

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
        <div className="m-3 bg-transparent">
            <InputGroup className={cn("border-foreground/10 border-2 rounded-4xl p-3", `min-h-${height ?? ""}`)}>
                <>
                    <InputGroupAddon align="block-start">
                        <Label htmlFor="amount-sell" className="text-foreground/65 text-xl">
                            {label}
                        </Label>
                    </InputGroupAddon>
                </>
                <div className="flex flex-row w-full">
                    <InputGroupInput id={id} placeholder={placeholder} className="!text-5xl font-medium" />
                    <Button size="sm" variant="outline" className="border-foreground/10 rounded-full relative">
                        <div className="flex flex-row">
                            <Avatar className="rounded-lg w-6 h-6 absolute left-1 top-1">
                                <AvatarImage
                                    src="/iconTokens/eth.png"
                                    alt="@eth"
                                />
                            </Avatar>
                            <p className="mx-5">ETH</p>
                            <ChevronDown className="absolute right-2 top-2" />
                        </div>
                    </Button>
                </div>
                <>
                    <InputGroupAddon align="block-end">
                        <InputGroupText className="text-muted-foreground text-lg">
                            {textEnd}
                        </InputGroupText>
                    </InputGroupAddon>
                </>
            </InputGroup >
        </div >
    )
}