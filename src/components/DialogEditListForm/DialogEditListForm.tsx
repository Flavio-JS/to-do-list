// import { useUpdateList } from "@/src/modules/todo-lists/use-querys/useUpdateList";

// export const DialogEditListForm = () => {
//     const [finished, setFinished] = useState(initialFinished);
//     const mutation = useUpdateList({
//         onMutate: async () => {
//           setFinished(!finished);
//         },
//         onError: (error) => {
//           console.error(error);
//         },
//       });

//   return (
//     <form
//       onSubmit={async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.currentTarget);
//         const finished = formData.get("finished") === "true";
//         const priority = formData.get("priority") as "Alta" | "Media" | "Baixa";
//         const listEmoji = formData.get("listEmoji") as string;
//         const listId = parseInt(formData.get("listId") as string, 10);
//         const listName = formData.get("listName") as string;

//         await mutation.mutateAsync({
//           listId,
//           userId,
//           finished,
//           priority,
//           listEmoji,
//           listName,
//         });
//       }}
//     >
//       <input
//         type="checkbox"
//         className="hidden"
//         id={`list-finished${listId}`}
//         readOnly
//         checked={finished}
//         onClick={() => {
//           mutation.mutate({
//             listId: listId,
//             userId: userId,
//             finished: finished ? false : true,
//           });
//         }}
//       />
//       <label
//         htmlFor={`list-finished${listId}`}
//         className={`flex h-6 cursor-pointer items-center overflow-hidden rounded-full ${finished ? "justify-end" : "justify-start"} ${finished ? "bg-[#50F283]" : "bg-[#F25551]"} border shadow-xl transition ${finished ? "border-[#50F283]" : "border-[#F25551]"} `}
//       >
//         <span
//           className={`flex h-6 font-semibold ${finished ? "text-black" : "text-white"} w-6 items-center justify-center overflow-hidden rounded-full text-center text-xs ${finished ? "bg-white" : "bg-[#462730]"} transition`}
//         >
//           {finished ? "F" : "NF"}
//         </span>
//       </label>
//       <label className="block">
//         <span className="text-sm font-bold text-[#FFFBFF]">Priority</span>
//         <select
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           name="priority"
//           defaultValue={priority}
//         >
//           <option value="Alta">Alta</option>
//           <option value="Media">Media</option>
//           <option value="Baixa">Baixa</option>
//         </select>
//       </label>
//       <label className="block">
//         <span className="text-sm font-bold text-[#FFFBFF]">Emoji</span>
//         <input
//           type="text"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           name="listEmoji"
//           defaultValue={listEmoji}
//         />
//       </label>
//       <label className="block">
//         <span className="text-sm font-bold text-[#FFFBFF]">List ID</span>
//         <input
//           type="number"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           name="listId"
//           defaultValue={listId}
//         />
//       </label>
//       <label className="block">
//         <span className="text-sm font-bold text-[#FFFBFF]">List Name</span>
//         <input
//           type="text"
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           name="listName"
//           defaultValue={listName}
//         />
//       </label>
//       <button
//         type="submit"
//         className="mt-3 w-full rounded-md bg-[#53B543] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#3e8e41]"
//       >
//         Save
//       </button>
//     </form>
//   );
// };
