import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/libs/store";
import Model from "@/components/modal/modal";
import Input from "@/components/contacts/input";
import RadioButton from "@/components/contacts/radio";
import Header from "@/components/contacts/heading";
import { IContact, add, update } from "@/slice/contact";
import { close, setId } from "@/slice/model";
import { uid } from "@/libs/uuid";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function ModelProvider() {
  const contact = useSelector((state: RootState) => state.contactReducer);
  const model = useSelector((state: RootState) => state.modelReducer);
  const dispatch = useDispatch();
  const [value, setValue] = useState<IContact>({
    id: "",
    firstName: "",
    lastName: "",
    status: false,
  });
  useEffect(() => {
    const res = contact.map((value) => {
      if (value.id === model.id) return value;
    })[0];
    setValue(res as IContact);
  }, [contact, model.id]);
  const action = () => {
    // Do something!
    if (value && value.firstName && value.lastName) {
      const uuid = uid();
      dispatch(
        add({
          ...value,
          id: uuid,
        })
      );
      setValue({
        id: "",
        firstName: "",
        lastName: "",
        status: false,
      });
      dispatch(close());
      toast.success("New Contact Added!");
    } else {
      toast.error("Please fill all the required fields!");
    }
  };
  const edit = () => {
    if (!model.id) return null;
    if (value && value.firstName && value.lastName) {
      dispatch(update(value));
      // reset();
      dispatch(setId(""));
      setValue({
        id: "",
        firstName: "",
        lastName: "",
        status: false,
      });
      dispatch(close());
      toast.success("Contact updated!");
    } else {
      toast.error("Please fill all the required fields!");
    }
  };
  const body = (
    <div className="grid gap-3">
      <Header title="👋 Welcome, Friend" subtitle="Create a new Contact!" />
      <Input
        id="firstName"
        label="First Name"
        required={true}
        value={value?.firstName ?? ""}
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue((value) => {
            return {
              ...value,
              firstName: event.target.value,
            };
          })
        }
      />
      <Input
        id="lastName"
        label="Last Name"
        required={true}
        value={value?.lastName}
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue((value) => {
            return {
              ...value,
              lastName: event.target.value,
            };
          })
        }
      />
      <RadioButton
        id="status"
        label="Active"
        type="checkbox"
        required={false}
        checked={value?.status}
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue((value) => {
            return {
              ...value,
              status: event.target.checked,
            };
          })
        }
      />
    </div>
  );
  const editBody = (
    <div className="grid gap-3">
      <Header
        title="👋 Welcome, Friend"
        subtitle="Edit an exisiting contact!"
      />
      <div className="relative">
        <input
          id={"firstName"}
          type="text"
          className={`
          peer
          border-2
          p-3
          rounded
          placeholder:opacity-100
          transition
          placeholder:select-none
          focus:placeholder:opacity-0
        `}
          placeholder={"First Name"}
          value={value?.firstName}
          onChange={(event) =>
            setValue((value) => {
              return {
                ...value,
                firstName: event.target.value,
              };
            })
          }
        />
        <label
          htmlFor={"firstName"}
          className={`
          transition
          duration-300
          opacity-0
          absolute
          font-light
          text-gray-300
          translate-y-3
          text-sm
          bg-white
          rounded
          p-1
          left-3.5
          peer-focus:-translate-y-3
          peer-focus:opacity-100
          peer-focus:text-black
        `}
        >
          {"First Name"}
        </label>
      </div>
      <div className="relative">
        <input
          id={"lastName"}
          type="text"
          className={`
          peer
          border-2
          p-3
          rounded
          placeholder:opacity-100
          transition
          placeholder:select-none
          focus:placeholder:opacity-0
        `}
          placeholder={"Last Name"}
          value={value?.lastName}
          onChange={(event) =>
            setValue((value) => {
              return {
                ...value,
                lastName: event.target.value,
              };
            })
          }
        />
        <label
          htmlFor={"lastName"}
          className={`
          transition
          duration-300
          opacity-0
          absolute
          font-light
          text-gray-300
          translate-y-3
          text-sm
          bg-white
          rounded
          p-1
          left-3.5
          peer-focus:-translate-y-3
          peer-focus:opacity-100
          peer-focus:text-black
        `}
        >
          {"Last Name"}
        </label>
      </div>
      <div className="flex items-center gap-3">
        <input
          id={"status"}
          type={"checkbox"}
          checked={value?.status}
          onChange={(event) =>
            setValue((value) => {
              return {
                ...value,
                status: event.target.checked,
              };
            })
          }
        />

        <label
          htmlFor={"status"}
          className={`
          font-medium
          text-sm
        `}
        >
          {"Active"}
        </label>
      </div>
    </div>
  );
  return (
    <>
      {model.isOpen && (
        <Model
          title="Contact"
          action={model.id ? edit : action}
          actionLabel={model.id ? "Update" : "Create"}
          body={model.id ? editBody : body}
        />
      )}
    </>
  );
}

export default ModelProvider;
