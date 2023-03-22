import { FB_DOMAIN, ANONYMOUS_USER } from "../const";
import { listActions } from "./list-slice";

export function getNotes() {
  return async (dispatch: any) => {
    const fecthData = async () => {
      const response = await fetch(FB_DOMAIN + ANONYMOUS_USER + ".json");

      if (!response.ok) throw new Error("Can't get notes");

      const data = await response.json();
      //   dispatch()
      return data;
    };

    try {
      const noteData = await fecthData();
      dispatch(listActions.setList(noteData));
      // disapatch action get initial value for redux
    } catch (err: any) {
      // lead to error page
    }
  };
}

// export function updateBackEndNotes(notesData: any) {
//   return async (dispatch: any) => {
//     const updateDB = async (payload: any) => {
//       const response = await fetch(FB_DOMAIN + ANONYMOUS_USER + ".json", {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error("Can't update card state.");

//       const data = await response.json();

//       return data;
//     };

//     try {
//       dispatch(listActions.movingCardOrder(notesData));
//       const res = await updateDB(notesData);
//     } catch (err: any) {
//       // lead to error page.
//     }
//   };
// }
