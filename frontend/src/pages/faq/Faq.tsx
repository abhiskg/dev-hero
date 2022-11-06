import useDocTitle from "../../hooks/useDocTitle";

const Faq = () => {
  useDocTitle("FAQ");

  return (
    <div className="custom-width mx-auto">
      <section className="pb-16 dark:bg-gray-800 dark:text-gray-100 sm:pb-40">
        <div className="inner-width mx-auto flex flex-col justify-center">
          <h2 className="header-style">Frequently Asked Questions</h2>
          <div className="flex flex-col divide-y divide-gray-700 sm:px-8 lg:px-12 xl:px-32">
            <details>
              <summary className="cursor-pointer py-2 outline-none ">
                How many courses are there in Dev Hero?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  There are about 6 courses available right now, more coming
                  soon.
                </p>
              </div>
            </details>
            <details>
              <summary className="cursor-pointer py-2 outline-none ">
                When I can get discount in premium membership?
              </summary>
              <div className="px-4 pb-4">
                <p>We mainly focus on quality so we offer no discounts.</p>
              </div>
            </details>
            <details>
              <summary className="cursor-pointer py-2 outline-none ">
                Does the course will held online and offline?
              </summary>
              <div className="space-y-2 px-4 pb-4">
                <p>
                  Presently, we are offering online course, later on we will
                  move to offline.
                </p>
              </div>
            </details>
            <details>
              <summary className="cursor-pointer py-2 outline-none ">
                How many members are there in dev hero team?
              </summary>
              <div className="space-y-2 px-4 pb-4">
                <p>Currently, 20 members are working actively in Dev Hero.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
