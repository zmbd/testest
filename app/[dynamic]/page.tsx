export async function generateStaticParams() {
  const clients = await fetch(
    "https://nextjsisrback.onrender.com/clients"
  ).then((res) => res.json());

  return clients.map(({ client }: { client: string }) => ({
    dynamic: client,
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
