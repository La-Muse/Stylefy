import { Input } from "@/src/components/ui/input";

export const MailAddressInput = ({
  value,
  onChange,
}: { value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
  return <Input placeholder="メールアドレス" type="email" value={value} onChange={onChange} required />;
};
