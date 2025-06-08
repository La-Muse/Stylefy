import { Button } from "@/src/components/ui/button";

const SignInNavigationButton = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className="text-gray-600 hover:text-gray-900 font-light tracking-wide transition-colors"
    >
      すでにアカウントをお持ちの方
    </Button>
  );
};

export default SignInNavigationButton;
