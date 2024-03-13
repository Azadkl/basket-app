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
} from "@mantine/core";
import { IconCircleCheck, IconShoppingCart } from "@tabler/icons-react";
import Card from "./components/Card";
import { useState } from "react";

const storeItems = [
  {
    name: "Akıllı Saat",
    src: "akillisaat",
    price: 30,
  },
  {
    name: "Spor Ayakkabı",
    src: "ayakkabi",
    price: 20,
  },
  {
    name: "Fotoğraf Makinası",
    src: "kamera",
    price: 10,
  },
  {
    name: "Kulaklık",
    src: "kulaklik",
    price: 20,
  },
  {
    name: "Oyuncak Araba",
    src: "oyuncakaraba",
    price: 20,
  },
  {
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
        {filteredItems.map(({ name, src }) => {
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
          {basketItems.map(({ name }, index) => (
            <ListItem key={index}>{name}</ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
