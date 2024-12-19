import styles from "./label.module.css";

interface LabelProps {
  text: string;
  className?: string; // Для добавления дополнительных стилей
}

const Label: React.FC<LabelProps> = ({ text, className }) => {
  return <span className={`${styles.label} ${className || ""}`}>{text}</span>;
};

export default Label;
