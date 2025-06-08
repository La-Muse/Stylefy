import { Button } from "@/src/components/ui/button";

const SignUpNavigationButton = ({
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
      アカウントを作成する
    </Button>
  );
};

export default SignUpNavigationButton;
