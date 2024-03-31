import {
  Card as UICard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  code: string;
  description: string;
  rate: string;
  symbol: string;
}

const Card = ({ code, description, rate, symbol }: Props) => {
  return (
    <UICard className="bg-cardBg shadow-sm transition-shadow duration-300  hover:shadow-lg">
      <CardHeader>
        <CardTitle>{code}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-3xl font-bold">
          <span className="text-red-500 font-normal">{symbol}</span> {rate}
        </h2>
      </CardContent>
    </UICard>
  );
};

export default Card;
