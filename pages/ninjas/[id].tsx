import { Center } from "@mantine/core";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja: { id: { toString: () => any } }) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);

  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }: any) => {
  return (
    <Center>
      <div>
        <h1>{ninja.name}</h1>
        <p>Email: {ninja.email}</p>
        <p>Website: {ninja.website}</p>
        <p>Address: {ninja.address.city}</p>
        <p> {ninja.address.suite}</p>
        <p> {ninja.address.zipcode}</p>
      </div>
    </Center>
  );
};

export default Details;
