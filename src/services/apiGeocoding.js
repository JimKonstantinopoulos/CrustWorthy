export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=386036701047735872997x105675`,
  );

  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();

  return data;
}
