import { Card, Image, Text, Button, Group } from "@mantine/core";

const CardComponent = ({ name, onAdd, src }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={"/assets/image/" + src + ".jpg"}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        {/* {<Badge color="pink">On Sale</Badge>} */}
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color="dark" fullWidth mt="md" radius="md" onClick={onAdd}>
        Ekle
      </Button>
    </Card>
  );
};
export default CardComponent;
