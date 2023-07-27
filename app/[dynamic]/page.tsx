export async function generateStaticParams() {
  const clients = await fetch("https://nextjsisrback.onrender.com/clients", {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  return clients.map(({ client }: { client: string }) => ({
    dynamic: client,
  }));
}

const Page = ({ params }: any) => {
  // const data = fetch("https://cat-fact.herokuapp.com/facts", {
  //   cache: "force-cache",
  // }).then((res) => res.json());

  return (
    <div className="w-full h-full flex flex-col justify-center align-middle p-3">
      <h1>{params.dynamic}</h1>
    </div>
  );
};

export default Page;
