export default async () => {
  const results = await fetch('https://www.govtrack.us/api/v2/role?current=true&role_type=senator')
  const { objects } = await results.json()
  return objects
}