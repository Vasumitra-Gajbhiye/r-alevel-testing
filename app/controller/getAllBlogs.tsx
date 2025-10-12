export default async function getAllSubjects() {
  try {
    const res = await fetch(`https://alevel-testing.netlify.app/api/blogs`, {
      // const res = await fetch(`http://localhost:3000/api/blogs`, {
      // mode: "no-cors", 
    });
    const sub = await res.json();
    return sub.data;
  } catch (error) {
    console.log(error);
  }
}
