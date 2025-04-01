import { Checkbox } from "./ui/checkbox";

const CheckboxWithLabel = ({ children }) => {
  return (
    <div className="flex items-center space-x-2">
      {" "}
      {/* Container flex alinhado */}
      <Checkbox id="check" className="h-4 w-4" />{" "}
      {/* Tamanho fixo para evitar shifts */}
      <label
        htmlFor="check"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none" /* select-none evita seleção de texto */
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
