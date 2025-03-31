import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export function SliderWithValue() {
  const [value, setValue] = useState([8]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-md">
      {/* Display do valor */}
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">
          Quantidade de caracteres:{value[0]}
        </span>
      </div>

      {/* Slider */}
      <Slider
        defaultValue={[8]}
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        max={20}
        step={1}
      />
    </div>
  );
}
