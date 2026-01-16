import { PersonCard } from "../components/PersonCard";

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <PersonCard
        name="Popescu Ion"
        role="Coordonator IT"
        image="https://via.placeholder.com/300"
      />
      <PersonCard
        name="Ionescu Maria"
        role="Design Lead"
        image="https://via.placeholder.com/300"
      />
      <PersonCard
        name="Vasile Andrei"
        role="Logistică"
        image="https://via.placeholder.com/300"
      />
    </div>
  );
}

export default Home;
