import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="hidden sm:block text-sm font-semibold truncate max-w-[120px] md:max-w-none">
      {username}
    </div>
  );
}

export default Username;
