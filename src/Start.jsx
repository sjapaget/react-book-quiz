import { React } from "react";

function Start() {
  return (
    <div className="text-center">
      <h1 className="py-4 text-5xl">
        Book Quiz!
      </h1>
      <p className="py-4 text-xl">
        Want to test your literature knowledge? Look no further!
      </p>
      <button className="my-8 p-4 rounded-lg text-bgBeige-500 text-xl bg-btnBlue-500 hover:bg-btnBlue-500/75">
        Start quiz
      </button>
    </div>
  )
};

export default Start;
