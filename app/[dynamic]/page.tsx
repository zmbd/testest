export async function generateStaticParams() {
  const clients = [
    {
      client: "morningstar",
      content: "Yes, hello, I'm Morningstar",
    },
    {
      client: "apollo",
      content: "yesyesyeyseyseyse",
    },
    {
      client: "crazy8",
      content: "crazy 8 DDDDDDDDDD",
    },
  ];

  return clients.map(({ client }) => ({
    dynamic: client,
  }));
}

const Page = ({ params }: any) => {
  console.log(params.dynamic);
  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      {/* <h1>{context.params.dynamic}</h1> */}
    </div>
  );
};

export default Page;
