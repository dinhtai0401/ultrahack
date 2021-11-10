import SubmissionList from "./components/SubmissionList";

const submissions = [
  {
    name: "apple",
    created_at: "2021-11-15-T23:30:15.123Z",
    description: "delicious beep",
  },
  {
    name: "bief",
    created_at: "2021-12-16-T23:30:15.123Z",
    description: "delicious google",
  },
  {
    name: "ap",
    created_at: "2021-11-15-T23:40:15.123Z",
    description: "delicious beep",
  },
  {
    name: "cow",
    created_at: "2021-11-15-T20:30:15.123Z",
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
