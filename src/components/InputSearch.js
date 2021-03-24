import React from "react";
import "./InputSearch.css";
const InputSearch = (props) => {
  return (
    <React.Fragment>
      <div className="bg-white shadow-md rounded px-8 pt-12 pb-8 flex flex-col">
        <div className="mb-0">
          <label
            className="inline-block text-grey-darker text-sm font-bold"
            for="repo"
          >
            Repo
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="repo"
              type="text"
              placeholder="angular/angular"
              value={props.repo}
              onChange={props.onChangeRepo}
            />
          </label>

          <label
            className="inline-block text-grey-darker text-sm font-bold"
            for="Label"
          >
            Label
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="Label"
              type="text"
              placeholder="Type: Bug"
              value={props.label}
              onChange={props.onChangeLabel}
            />
          </label>
        </div>
        <div className="inline-block items-center justify-between">
          <button
            className="w-full p-3 bg-blue-500 text-white mg-black font-bold py-2 px-4 rounded"
            type="button"
            onClick={props.onSearch}
          >
            Buscar
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputSearch;
