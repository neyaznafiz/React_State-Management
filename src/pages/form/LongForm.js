import React, { useReducer } from "react";
import { actionTypes } from "../../state/actionTypes";
import { initialState, reducer } from "../../state/fornReducer";

function LongForm() {
  

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (event) => {
    event.preventDefault();

    console.log(state);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-auto">
      <form
        onSubmit={submit}
        className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between"
      >
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
            className="border border-gray-300 rounded-md outline-none px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
            className="border border-gray-300 rounded-md outline-none px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
            className="border border-gray-300 rounded-md outline-none px-2 py-1"
          />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <h1 className="mb-3">Gender</h1>
          <div className="flex gap-3">
            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onClick={(e) =>
                  dispatch({
                    type: actionTypes.INPUT,
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
              />
              <label className="ml-2 text-lg" for="male">
                Male
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onClick={(e) =>
                  dispatch({
                    type: actionTypes.INPUT,
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
              />
              <label className="ml-2 text-lg" for="female">
                Female
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onClick={(e) =>
                  dispatch({
                    type: actionTypes.INPUT,
                    payload: {
                      name: e.target.name,
                      value: e.target.value,
                    },
                  })
                }
              />
              <label className="ml-2 text-lg" for="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" for="education">
            Education
          </label>
          <select
            name="education"
            id="education"
            onChange={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
            className="border border-gray-300 rounded-md outline-none px-1 py-1"
          >
            <option value="SSC">SSC</option>
            <option value="HSC">HSC</option>
            <option value="underGrad">Under Graduate</option>
            <option value="graduate">Graduate</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3">Number of PCs</label>
          <div className="flex justify-between items-center gap-2 ">
            <button
              onClick={() => dispatch({ type: actionTypes.DECREMENT })}
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10 "
            >
              -
            </button>
            <div className="border flex-1 flex justify-center items-center h-10 rounded-md border-gray-300">
              <span className="text-lg">{state.quantity}</span>
            </div>
            <button
              onClick={() => dispatch({ type: actionTypes.INCREMENT })}
              className="bg-indigo-500 text-lg text-white rounded h-10 w-10"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-xs ">
          <label className="mb-3" for="feedback">
            Feedback
          </label>
          <textarea
            name="feedback"
            type="text"
            id="feedback"
            cols="30"
            rows="4"
            onBlur={(e) =>
              dispatch({
                type: actionTypes.INPUT,
                payload: {
                  name: e.target.name,
                  value: e.target.value,
                },
              })
            }
            className="border border-gray-300 rounded-md outline-none px-2 py-1"
          ></textarea>
        </div>

        <div className="flex justify-between items-center w-full">
          <div className="flex  w-full max-w-xs">
            <input
              type="checkbox"
              name="term"
              id="terms"
              onClick={() => dispatch({ type: actionTypes.TOGGLE })}
              className="mr-3"
            />
            <label for="terms">I agree to terms and conditions</label>
          </div>
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
            disabled={!state.term}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default LongForm;
