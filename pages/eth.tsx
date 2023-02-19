import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { GasCard } from "@/components";
import { Center } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.owlracle.info/v3/eth/gas?blocks=200&accept=35%2C60%2C90%2C100&feeinusd=true&eip1559=true&reportwei=false&percentile=0.3&apikey=7582d71259594fe280d81f2ea06b0ac9"
  );
  const data = await res.json();
  return {
    props: { gasFees: data },
  };
};

export default function eth({ gasFees }: any): JSX.Element {
  return (
    <>
      <Center>
        <h1> Ethereum Gas tracker</h1>
      </Center>
      <Center>
        {gasFees?.speeds?.map(
          (gasFees: {
            baseFee:
              | string
              | number
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => (
            // eslint-disable-next-line react/jsx-key
            <GasCard gasFees={gasFees} />
          )
        )}
      </Center>
    </>
  );
}
