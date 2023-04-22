import type { RootState } from "@/libs/store";
import { useSelector, useDispatch } from "react-redux";
import {
  FolderOpenIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { open, setId } from "@/slice/model";
import { remove } from "@/slice/contact";
import { PlusIcon } from "@heroicons/react/24/outline";
import Head from "next/head";

function Home() {
  const contact = useSelector((state: RootState) => state.contactReducer);
  const dispatch = useDispatch();
  if (contact.length <= 0)
    return (
      <>
        <Head>
          <title>Contact Mangement System</title>
        </Head>
        <div className="grid place-items-center mt-52 gap-2">
          <>
            <FolderOpenIcon className="w-10 h-10" />
            <h1 className="font-medium">No Contacts Found!</h1>
            <button
              onClick={() => dispatch(open())}
              className="border border-black rounded p-3 font-medium"
            >
              Create
            </button>
          </>
        </div>
      </>
    );
  return (
    <>
      <Head>
        <title>Contact Mangement System</title>
      </Head>
      <main className="m-10">
        <div className="flex gap-5">
          <button
            className="border-2 border-black border-dashed p-5 rounded w-28 h-32 flex items-center justify-center"
            onClick={() => dispatch(open())}
          >
            <PlusIcon className="w-5 h-5" />
          </button>
          {contact.map((value) => (
            <div
              key={value.id}
              className="max-w-max p-5 rounded-md bg-gray-100 grid gap-3 shadow-md"
            >
              <div className="text-center space-y-2 font-medium">
                <h1>
                  {value.firstName} {value.lastName}
                </h1>
                <p>{value.status ? "Active" : "Inactive"}</p>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    dispatch(setId(value.id));
                    dispatch(open());
                  }}
                >
                  <PencilSquareIcon className="w-5 h-5 text-blue-500" />
                </button>
                <button onClick={() => dispatch(remove(value.id))}>
                  <TrashIcon className="w-5 h-5 text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
