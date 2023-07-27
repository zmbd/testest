export async function getKittens(): Promise<any[]> {
  const response = await fetch("https://cat-fact.herokuapp.com/facts");

  if (!response.ok) return [];

  const kittens = await response.json();

  return kittens;
}

async function Home() {
  const kittens = await getKittens();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {kittens && kittens.map((kitten: any) => <h1 key={1}>{kitten.text}</h1>)}
    </main>
  );
}

export default Home;
