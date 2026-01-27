import { ConferencePageHeader } from "../components/Headers/ConferenceHeader";

function Conference() {
  return (
    <>
      <ConferencePageHeader />
      <div
        style={{ height: "800px", padding: "20px", border: "2px solid green" }}
      >
        <h1>Pagina Conference</h1>
      </div>{" "}
    </>
  );
}

export default Conference;
