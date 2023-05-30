import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AcmeLogo } from "./logo";

export default function NavbarPage() {
  const [categories, setCategories] = useState<any>();
  useEffect(() => {
    axios.get("http://localhost:1337/api/articles").then((res) => {
      const { data } = res.data;
      setCategories(data);
    });
  }, []);

  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="xs" />

        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded"
        >
          {categories?.map((category: any) => {
            return (
              <Navbar.Link href={category.id} key={category.id}>
                {category.attributes.name}
              </Navbar.Link>
            );
          })}
        </Navbar.Content>

        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>

        {/* <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse> */}
      </Navbar>
    </>
  );
}
