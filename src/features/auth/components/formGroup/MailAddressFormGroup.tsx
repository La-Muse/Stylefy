import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Mail } from "lucide-react";
import type { Control, FieldValues, UseFormReturn } from "react-hook-form";

export const MailAddressFormGroup = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          メールアドレス
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="example@email.com"
          value={value}
          onChange={onChange}
          className="w-full"
        />
      </div>
    </>
  );
};
