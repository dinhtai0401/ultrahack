import SubmissionList from "./components/SubmissionList";

const submissions = [
  {
    name: "apple",
    created_at: "2021-11-15T23:30:15.123Z",
    description: "delicious beep",
  },
  {
    name: "bief",
    created_at: "2021-12-16T23:30:15.123Z",
    description: "delicious google",
  },
  {
    name: "ap",
    created_at: "2021-11-15T23:40:15.123Z",
    description: "delicious beep",
  },
  {
    name: "cow",
    created_at: "2021-11-15T20:30:15.000Z",
    description: "delicious cow",
  },

];

function App() {
  return (
    <>
      <SubmissionList submissions={submissions} />
    </>
  );
}

export default App;
