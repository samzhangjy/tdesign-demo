import React from "react";
import { Avatar, Row, Col, Divider, List, Button } from "tdesign-react";
import { EditIcon, DeleteIcon } from "tdesign-icons-react";

const { ListItem, ListItemMeta } = List;

export default function Home() {
  const avatarUrl = "https://s2.loli.net/2022/01/03/tjm1K6waToB8iJO.png";
  const listData = [
    { id: 1, content: "列表内容列表内容列表内容" },
    { id: 2, content: "列表内容列表内容列表内容" },
    { id: 3, content: "列表内容列表内容列表内容" },
    { id: 4, content: "列表内容列表内容列表内容" }
  ];
  return (
    <div style={{ marginLeft: 100, marginRight: 100 }}>
      <Row align="middle">
        <Col span={2}>
          <Avatar
            image={"https://s2.loli.net/2022/01/03/tjm1K6waToB8iJO.png"}
            size="250px"
          />
        </Col>
        <Col span={10}>
          <h1>samzhangjy</h1>
          <p>
            Incididunt officia ut do ipsum pariatur ut cupidatat sint esse sunt
            ea est quis.
          </p>
        </Col>
      </Row>
      <Divider />
      <h2>最近发布</h2>
      <List size="small">
        {listData.map((item) => (
          <ListItem
            key={item.id}
            action={
              <>
                <li>
                  <Button
                    href=""
                    key="operate-one"
                    icon={<EditIcon style={{ color: "#fff" }} />}
                    theme="primary"
                    variant="base"
                  >
                    编辑
                  </Button>
                </li>
                <li>
                  <Button
                    href=""
                    key="operate-two"
                    theme="danger"
                    icon={<DeleteIcon style={{ color: "#fff" }} />}
                  >
                    删除
                  </Button>
                </li>
              </>
            }
          >
            <ListItemMeta
              avatar={avatarUrl}
              title="博客文章"
              description="Est mollit irure velit irure cillum nostrud qui veniam nulla in culpa."
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
