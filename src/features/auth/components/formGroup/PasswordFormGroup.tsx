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
import { Lock } from "lucide-react";

export const PasswordFormGroup = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="password" className="flex items-center gap-2">
          <Lock className="w-4 h-4" />
          パスワード
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="パスワードを入力"
          value={value}
          onChange={onChange}
          className="w-full"
        />
      </div>
    </>
  );
};
