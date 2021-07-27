// import React from "react";
// import useCreateSingleType from "../../Hooks/useCreateSingleType";

// function CreateType({ onSaveType, onDeleteType }) {
//   const {
//     name,
//     description,
//     handleNameChange,
//     handleDescriptionChange,
//     error,
//   } = useCreateSingleType();

//   const handleSaveType = () => {
//     onSaveType({
//       name,
//       description,
//     });
//   };

//   return (
//     <div onBlur={handleSaveType}>
//       <label>
//         type name
//         <input type="text" value={name} onChange={handleNameChange} />
//       </label>
//       <label>
//         type description
//         <textarea value={description} onChange={handleDescriptionChange} />
//       </label>
//       <button type="button" onClick={onDeleteType}>
//         delete
//       </button>
//       <h5>{error}</h5>
//     </div>
//   );
// }

// export default CreateType;

import { Field, FieldArray, Form } from "formik";
import React from "react";
import { initType } from "../../utils/initObjs";

function CreateTypes({ types }) {
  return (
    <Form>
      <FieldArray
        name={`types`}
        render={(arrayHelpers) =>
          types.map((type, index) => (
            <div key={type.id}>
              <Field name={`types[${index}].name`} />
              <Field name={`types[${index}].description`} />
              {types.length > 1 && (
                <button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)} // remove from the list
                >
                  Remove Type
                </button>
              )}
              <button
                type="button"
                onClick={() => arrayHelpers.insert(index + 1, initType())} // insert an initalValue at a position
              >
                Add Type
              </button>
            </div>
          ))
        }
      />
      <button type="submit">Fix Types</button>
    </Form>
  );
}

export default CreateTypes;
