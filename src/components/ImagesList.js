import { useFetch } from "./useFetch";
import OneItem from "./OneItem";
import {Container} from 'react-bootstrap';


function ImagesList({ number, imageName, category }) {
  const { data } = useFetch(number, imageName);
  return (
    <Container>
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
    </Container>
  );
}
export default ImagesList;
