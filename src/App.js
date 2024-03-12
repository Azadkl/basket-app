import "./App.css";
import "@mantine/core/styles.css";
import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  rem,
  ListItem,
  Input,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import Card from "./components/Card";
import { useState } from "react";

const storeItems = [
  {
    name: "Akıllı Saat",
    src:"akillisaat",
    price: 30,
  },
  {
    name: "Spor Ayakkabı",
    src:"ayakkabi",
    price: 20,
  },
  {
    name: "Fotoğraf Makinası",
    src:"kamera",
    price: 10,
  },
  {
    name: "Kulaklık",
    src:"kulaklik",
    price: 20,
  },
  {
    name: "Oyuncak Araba",
    src:"oyuncakaraba",
    price: 20,
  },
  {
    name: "Kol Saati",
    src:"saat",
    price: 20,
  },

];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue,setSearchValue]=useState("");
  let filteredItems = basketItems.filter((item)=> item.name.toLowerCase().indexOf(searchValue.toLowerCase())>=0);
  return (
    <Container>
      <SimpleGrid cols={3} className="Store">
        {storeItems.map(({ name ,src}) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => setBasketItems([...basketItems, { name: name }])}
            ></Card>
          );
        })}
      </SimpleGrid>
      <Input.Wrapper label="Arama" className="List">
      <Input onChange ={(e)=>setSearchValue(e.target.value)} />
    </Input.Wrapper>
      <List
        className="List"
        spacing="xs"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size={16} />
          </ThemeIcon>
        }
      >
        {filteredItems.map(({ name },index) => (
          <ListItem key={index}>{name}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
