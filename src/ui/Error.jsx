import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="px-4 py-10 text-center sm:px-6 md:px-8">
      <h1 className="mb-4 text-xl font-bold text-red-600 sm:text-2xl">
        Something went wrong 😢
      </h1>
      <p className="mb-8 text-sm text-stone-600 sm:text-base">
        {error.data || error.message}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
