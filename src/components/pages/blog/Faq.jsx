import React from "react";

const Faq = ({ faq }) => {
  const { title, description } = faq;
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center px-4  mx-auto md:p-2">
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              {title}
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
              {description}{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
