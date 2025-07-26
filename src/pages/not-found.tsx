import { type FC } from "react";
import { ParentComp } from "@/components/parent-comp";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router";
// import {Button} from "@/components/ui/button"

const NotFound: FC = () => {
  return (
    <ParentComp>
      <div className="flex flex-col items-center text-center py-16">
        <AlertTriangle className="w-12 h-12 text-red-600 mb-4" />
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="mb-6 text-gray-600">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Go back home
        </Link>
      </div>
    </ParentComp>
  );
};

export default NotFound;
