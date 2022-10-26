const CourseCard = () => {
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src="https://source.unsplash.com/random/480x360/?4"
            alt=""
            className="block h-72 w-full rounded-md object-cover object-center dark:bg-gray-500"
          />
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              Facere ipsa nulla corrupti praesentium pariatur architecto
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
