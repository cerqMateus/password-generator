import { Card, CardContent } from "./ui/card";
import { Copy } from "lucide-react";

const Output = ({ password }) => {
  return (
    <div>
      <Card className="w-80">
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <span className="flex-1 font-mono text-sm">
              {password || "A senha gerada aparecerá aqui..."}
            </span>
            <button className="text-gray-500 hover:text-gray-700 transition-colors">
              <Copy className="h-5 w-5" />{" "}
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Output;
