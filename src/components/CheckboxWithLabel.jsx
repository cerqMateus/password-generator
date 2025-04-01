import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

const CheckboxWithLabel = ({ children, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        className="h-4 w-4"
        checked={isChecked}
        onCheckedChange={() => setIsChecked(!isChecked)}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none" /* select-none evita seleção de texto */
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
