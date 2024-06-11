/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Label, TextInput } from "flowbite-react";
import COLORS from "../../utils/Colors";

function Registration() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <form className="flex max-w-md flex-col gap-4 border rounded-md p-5 shadow w-[450px]">
        <h1 className="text-xl font-bold border-b pb-2">Registration</h1>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fullname" value="Full Name" />
          </div>
          <TextInput
            id="fullname"
            type="text"
            placeholder="Enter your name.."
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="phonenumber" value="Mobile Numer" />
          </div>
          <TextInput
            id="phonenumber"
            type="number"
            placeholder="Enter your phone number.."
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <Button type="submit" className={`bg-[${COLORS.primary}]`}>
          {"Registration"}
        </Button>
      </form>
    </div>
  );
}

export default Registration;
