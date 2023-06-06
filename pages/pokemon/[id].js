import { useEffect } from "react";
import { useRouter } from "next/router";
import data from "../../data/data.json";
import Image from "next/image";

export default function Description(props) {
  const router = useRouter();
  const pokemon = data[router.query.key]

  console.log(pokemon);

  return (
    <div className="min-h-screen min-w-screen">
      <div>
        <Image src={`${pokemon.image}.png`} width={96} height={96} quality={100}/>
      </div>
    </div>
  );
}
