import { useFetch } from "./useFetch";
import OneItem from "./OneItem";

function ImagesList({ number, imageName, category }) {
  const { data } = useFetch(number, imageName);
  return (
    <>
      <h1 className="header__title">{category}</h1>
      {
        <div>
          {data.map((item) => {
            return (
              <OneItem
                key={item.url}
                id={item.id}
                title={item.title}
                image={item.image}
              />
            );
          })}
        </div>
      }
    </>
  );
}
export default ImagesList;
