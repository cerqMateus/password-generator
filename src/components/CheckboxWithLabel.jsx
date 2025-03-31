import { Checkbox } from "./ui/checkbox";

const CheckboxWithLabel = ({ children }) => {
  return (
    <div className="">
      <Checkbox id="check" />
      <label
        htmlFor="check"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
