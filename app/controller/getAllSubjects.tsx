export default async function getAllMembers() {
  try {
       const apiLink =process.env.NEXT_PUBLIC_GETALLSUBJECTS;
           const res = await fetch(`${apiLink}`);

    // const res = await fetch(`https://alevel-testing.netlify.app/api/resources`);
    // const res = await fetch(`http://localhost:3000/api/resources`);
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
