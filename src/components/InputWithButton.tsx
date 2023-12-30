import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
interface Target {
  target: {
    value: string
  };
}

export function InputWithButton() {
  const [email, setEmail] = useState<string>("");
  const onChange = ({ target }: Target) => setEmail(target.value);

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        crossOrigin=""
        type="email"
        label="Enter your Email "
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />

      <Button
        size="sm"
        disabled={!email}
        className="!absolute right-1 top-1 rounded bg-[#FB9C16]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 rotate-[-35deg]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      </Button>
    </div>
  );
}