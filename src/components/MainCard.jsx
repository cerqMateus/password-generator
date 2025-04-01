import CheckboxWithLabel from "./CheckboxWithLabel";
import { SliderWithValue } from "./SliderWithValue";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const MainCard = () => {
  return (
    <Card className="flex flex-col">
      <CardContent className="w-80 h-96 space-y-4">
        <div className="mt-4">
          <SliderWithValue />
        </div>
        <div className="space-y-6 pt-3">
          <CheckboxWithLabel id={"major"}>Letras maiúsculas</CheckboxWithLabel>
          <CheckboxWithLabel id={"minor"}>Letras minúsculas</CheckboxWithLabel>
          <CheckboxWithLabel id={"numbers"}>Números</CheckboxWithLabel>
          <CheckboxWithLabel id={"symbols"}>Símbolos</CheckboxWithLabel>
        </div>
        <div className="flex items-start justify-center">
          <Button className="mt-20">Gerar Senha</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainCard;
