import { AppRouterParams } from "./layout";

const Page = ({ params }: { params: AppRouterParams }) => {
  const codeClasses = "rounded-sm bg-gray-200 px-1 font-mono";
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-4 text-lg font-semibold">
        Hello to <code className={codeClasses}>{params.lang}</code> speakers!
      </h1>
      <p>
        Slug:{" "}
        <code className={codeClasses}>{params.slugSegments?.join("/")}</code>
      </p>
    </main>
  );
};

export default Page;
