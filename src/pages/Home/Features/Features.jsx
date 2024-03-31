import { useEffect, useState } from "react";
import Container from "../../../components/Container";
import Title from "../../../components/Title";
import ServiceCard from "../../../components/ServiceCard";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Work with your JSON data here
        // console.log(data);
        setFeatures(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching the JSON file:", error);
      });
  }, []);

  return (
    <div className="py-20">
      <Container>
        <Title Title={"Engineering services and featured competencies"}></Title>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
          {features?.map((service) => (
            <ServiceCard key={service?.id} service={service}></ServiceCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;
