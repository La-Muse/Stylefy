import { Checkbox } from "@/src/components/ui/checkbox";

const ConfirmTermsPrivacyPolicy = ({
  checked,
  onCheckedChange,
}: { checked: boolean; onCheckedChange: (checked: boolean) => void }) => {
  return (
    <>
      <div className="flex items-center space-x-3 py-2">
        <Checkbox id="confirm" checked={checked} onCheckedChange={onCheckedChange} />
        <p className="text-sm text-gray-600 leading-relaxed">
          <a href="/terms" className="text-gray-900 underline underline-offset-2 hover:text-gray-700 transition-colors">
            利用規約
          </a>
          および
          <a
            href="/privacy"
            className="text-gray-900 underline underline-offset-2 hover:text-gray-700 transition-colors"
          >
            プライバシーポリシー
          </a>
          に同意します
        </p>
      </div>
    </>
  );
};

export default ConfirmTermsPrivacyPolicy;
