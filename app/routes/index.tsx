import { useLoaderData } from "remix";

export const loader = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();

    return data.results;
};

export default function Index() {
    const characters: { image: string; id: string }[] = useLoaderData();

    return (
        <div>
            {characters.map(({ image, id }) => (
                <img key={id} src={image} alt="" />
            ))}
        </div>
    );
}
