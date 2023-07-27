// export async function generateStaticParams() {
//   const clients = await fetch()
// }

const Page = (context: any) => {
  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      <h1>{context.params.dynamic}</h1>
    </div>
  );
};

export default Page;
