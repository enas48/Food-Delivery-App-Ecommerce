import React,{useState} from "react";
import { Input, Button } from "@material-tailwind/react";
interface Target {
  target: {
    value:string
  };
}
 
export function InputWithButton() {
  const [email, setEmail] =useState<string>("");
  const onChange = ({ target }:Target) => setEmail(target.value);
 
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
       crossOrigin=""
        type="email"
        label="Email Address"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Invite
      </Button>
    </div>
  );
}