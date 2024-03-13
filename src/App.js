import "./App.css";
import "@mantine/core/styles.css";
import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  ListItem,
  Input,
  CloseButton,
  Button,
  Drawer,
  Group,
  Indicator,
  Badge,
} from "@mantine/core";
import { IconCircleCheck, IconShoppingCart } from "@tabler/icons-react";
import Card from "./components/Card";
import { useState } from "react";

const storeItems = [
  {
    id: 100,
    name: "Akıllı Saat",
    src: "akillisaat",
    price: 30,
  },
  {
    id: 101,
    name: "Spor Ayakkabı",
    src: "ayakkabi",
    price: 20,
  },
  {
    id: 102,
    name: "Fotoğraf Makinası",
    src: "kamera",
    price: 10,
  },
  {
    id: 103,
    name: "Kulaklık",
    src: "kulaklik",
    price: 20,
  },
  {
    id: 104,
    name: "Oyuncak Araba",
    src: "oyuncakaraba",
    price: 20,
  },
  {
    id: 105,
    name: "Kol Saati",
    src: "saat",
    price: 20,
  },
];

function App() {
  let [opened, close] = useState(false);
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  let addToBasket = ({ id, name }) => {
    let basketIndex = basketItems.findIndex((item) => item.id === id);
    if (basketIndex >= 0) {
      let _basketItems = [...basketItems];
      _basketItems[basketIndex].count += 1;
      setBasketItems(_basketItems);
    } else {
      setBasketItems([...basketItems, { id, name, count: 1 }]);
    }
  };
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Arama">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            rightSectionPointerEvents="all"
            mt="md"
            rightSection={
              <CloseButton
                aria-label="Clear input"
                onClick={() => setSearchValue("")}
                style={{ display: searchValue ? undefined : "none" }}
              />
            }
          />
        </Input.Wrapper>
        <Indicator color="red" label={basketItems.length} size={22}>
          <Button onClick={() => close(true)}>
            {<IconShoppingCart size={22} />}
          </Button>
        </Indicator>
      </Group>
      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ id, name, src }) => {
          return (
            <Card
              key={name}
              name={name}
              src={src}
              onAdd={() => addToBasket({ id, name })}
            ></Card>
          );
        })}
      </SimpleGrid>
      <Drawer
        opened={opened}
        onClose={close}
        title="Sepetim"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
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
          {basketItems.map(({ name, count }, index) => (
            <ListItem key={index}><Group>
              {name}
              <Badge>{count}</Badge>
              </Group>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
