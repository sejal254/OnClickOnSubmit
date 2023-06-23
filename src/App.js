import "./styles.css";

export default function App() {
  const array = [1, 2, 3];
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submit", new FormData(e.target).get("text"));
  }
  function print(number) {
    console.log("Print", number);
  }
  function double(number) {
    return () => {
      console.log("Double", number * 2);
    };
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" defaultValue="Inital" />
        <button>Submit</button>
      </form>
      {array.map((number) => {
        return (
          <button key={number} onClick={() => print(number)}>
            Print{number}
          </button>
        );
      })}
      <br />
      {array.map((number) => {
        return (
          <button key={number} onClick={double(number)}>
            Double{number}
          </button>
        );
      })}
    </>
  );
}
