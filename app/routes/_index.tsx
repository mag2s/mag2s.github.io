import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center" >
        <div className="flex flex-col">
        <div className="flex flex-col items-center gap-2 mb-2 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded">
        <div className="w-full max-w-[634px]">
              <img
                src="/landscape.png"
                alt="Landscape"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mb-2 bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded">
            <div className="max-w-[150px]">
              <img
                src="/snowblower.png"
                alt="Velkommen"
                className="w-full h-auto"
              />
            </div>
            <div className="max-w-2xl text-center text-gray-800 dark:text-gray-300 ">
            <p className="text-2xl font-semibold">
              {/* Enhance quality in military training */}
              Our Mission: Streamline and Innovate
            </p>
            <p className="text-xl">
              We aim to revolutionize your technology chain, making processes smoother, faster, and more efficient.
              </p>
            </div>
          </div>
          </div>
        </div>
    </Layout>
  );
}
