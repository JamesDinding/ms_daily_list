import { useLoaderData, useNavigation } from "react-router-dom";

const NotePage = () => {
  const noteData = useLoaderData();
  const navigation = useNavigation();
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
    // .... handle err
  } else {
    const resData = await response.json();
    return resData;
  }
}
