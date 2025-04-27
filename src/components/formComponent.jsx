import React from "react";

const FormComponent = ({ fields }) => {
  return (
    <div className="   ">
      <form action="" type="submit">
        <div className="space-y-0 px-5">
          {Object.keys(fields).map((key) => {
            const field = fields[key];
            return (
              <fieldset
                key={key}
                className="border-2 border-gray-300 rounded-md px-3 relative"
              >
                <legend className="text-sm font-semibold px-2 text-[#6C25FF]">
                  {field.label}{" "}
                  {field.required && <span className="text-red-600">*</span>}
                </legend>
                <input
                  type={field.type}
                  id={key}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full pb-2 outline-none bg-transparent"
                />
              </fieldset>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
