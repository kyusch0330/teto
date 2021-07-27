// import React from "react";

// function CreateOption({
//   option,
//   onSaveOption,
//   onDeleteOption,
//   types,
//   sendError,
// }) {
//   const handleSaveOption = (newOption) => {
//     onSaveOption(newOption);
//   };

//   const handleOptionTextChange = (e) => {
//     const nextOptionText = e.target.value;
//     if (nextOptionText.length > 100) {
//       sendError("Option text must be less than 100 letters.");
//     } else {
//       handleSaveOption({
//         ...option,
//         optionText: nextOptionText,
//       });
//     }
//   };

//   const handleForTypeChange = (e) => {
//     const nextForType = Number(e.target.value);
//     handleSaveOption({
//       ...option,
//       forType: nextForType,
//     });
//   };

//   const handleWeightChange = (e) => {
//     const nextWeight = Number(e.target.value);
//     handleSaveOption({
//       ...option,
//       weight: nextWeight,
//     });
//   };

//   return (
//     <div>
//       <label>
//         optionText
//         <input
//           type="text"
//           value={option.optionText}
//           onChange={handleOptionTextChange}
//         />
//       </label>
//       <select
//         name="forType"
//         value={option.forType}
//         onChange={handleForTypeChange}
//       >
//         {types.map((type, index) => {
//           return (
//             <option key={type.id} value={type.id}>
//               {type.name}
//             </option>
//           );
//         })}
//       </select>
//       <input
//         type="number"
//         value={option.weight}
//         onChange={handleWeightChange}
//       />
//       <button type="button" onClick={onDeleteOption}>
//         delete
//       </button>
//     </div>
//   );
// }

// export default CreateOption;

import { Field, FieldArray } from "formik";
import React from "react";
import { initOption } from "../../utils/initObjs";

function CreateOptions({ qIndex, options, types }) {
  return (
    <FieldArray
      name={`questions[${qIndex}].options`}
      render={(arrayHelpers) =>
        options.map((option, oIndex) => (
          <div key={option.id}>
            <Field name={`questions[${qIndex}].options[${oIndex}].text`} />
            <Field
              as="select"
              name={`questions[${qIndex}].options[${oIndex}].forType`}
            >
              {types.map((type) => (
                <option value={type.id}>{type.name}</option>
              ))}
            </Field>
            <Field
              type="number"
              name={`questions[${qIndex}].options[${oIndex}].weight`}
            />
            {options.length > 1 && (
              <button
                type="button"
                onClick={() => arrayHelpers.remove(oIndex)} // remove from the list
              >
                remove
              </button>
            )}
            <button
              type="button"
              onClick={() => arrayHelpers.insert(oIndex + 1, initOption(types))} // insert an initalValue at a position
            >
              add
            </button>
          </div>
        ))
      }
    />
  );
}

export default CreateOptions;
