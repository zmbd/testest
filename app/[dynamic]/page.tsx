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

  return clients.map(({ client, content }) => ({
    dynamic: client,
    content,
  }));
}

const Page = async ({ params }: any) => {
  const data = await fetch("https://cat-fact.herokuapp.com/facts", {
    cache: "force-cache",
  }).then((res) => res.json());

  console.log(data);

  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      <h1>{data[0].text}</h1>
    </div>
  );
};

export default Page;
