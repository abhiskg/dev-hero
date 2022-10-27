import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <h2 className="mb-8 mt-2 text-center text-lg font-semibold">
        Course Categories
      </h2>
      <div className="space-y-4">
        <Link className="block" to="/course/01">
          Intelligence
        </Link>
        <Link className="block" to="/course/02">
          Intelligence
        </Link>
        <Link className="block" to="/course/03">
          Intelligence
        </Link>
        <Link className="block" to="/course/01">
          Intelligence
        </Link>
        <Link className="block" to="/course/01">
          Intelligence
        </Link>
        <Link className="block" to="/course/01">
          Intelligence
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
