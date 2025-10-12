export default async function getAllMembers() {
  try {
    const res = await fetch(`https://r-alevel.netlify.app/api/resources`);
    // const res = await fetch(`http://localhost:3000/api/resources`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
