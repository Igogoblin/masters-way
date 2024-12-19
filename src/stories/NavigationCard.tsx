import Image from "next/image";
import styles from "./navigationCard.module.css";
import Label from "./Label";

export interface NavigationCardProps {
  image: string;
  label: string;
  onClick: () => void;
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  image,
  label,
  onClick,
}) => {
  return (
    <div
      //   style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
      //   className="navigation-card"
    >
      <Image src={image} alt={label} width={200} height={200} />
      <Label text={label} />
    </div>
  );
};

export default NavigationCard;
