import { Header } from "../ui/header";

const StylefyHeader = ({ title, onBack, centered }: { title: string; onBack: () => void; centered: boolean }) => {
  return <Header title={title} onBack={onBack} centered={centered} />;
};

export default StylefyHeader;
