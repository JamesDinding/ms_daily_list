import { useLoaderData, useNavigation, json } from "react-router-dom";

const NotePage = () => {
  const noteData: any = useLoaderData();
  const navigation = useNavigation();
  console.log(noteData.isError);
  console.log(noteData);

  return (
    <div>
      {navigation.state === "loading" ? "loading" : "to do list component"}
    </div>
  );
};

export default NotePage;

export async function loader() {
  const response = await fetch("probably_firebase_dummy_backend");

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch data." }), {
    //   status: 500,
    // });
    throw json({ message: "Could not get data!" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}
