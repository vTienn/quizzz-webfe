import { Link } from "react-router-dom";
import { getAllTopic } from "../../service/TopicService";
import { useEffect, useState } from "react";
import { FacebookOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd"; // Thêm import Input từ Ant Design
import "./topic.css"
import { Color } from "antd/es/color-picker";


const { Search } = Input;

function Topic() {
    const [Topics, SetTopic] = useState([]);
    const [filteredTopics, setFilteredTopics] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        const fetchApi = async() => {
            const response = await getAllTopic();
            setFilteredTopics(response); // 👈 hiển thị đầy đủ khi vừa vào trang
            SetTopic(response);
        };
        fetchApi();
    }, []);
    const onSearch = (value) => {
        setSearchValue(value);
        const filtered = Topics.filter((topic) =>
            topic.name.toLowerCase().includes(value.toLowerCase())

        );
        setFilteredTopics(filtered);

    };



    return ( <
        >
        <
        div className = "title-find"
        style = {
            { marginBottom: "16px" }
        } >
        <
        h2 > Danh sách chủ đề ôn luyện < /h2> <
        Search placeholder = "Tìm kiếm chủ đề..."
        onSearch = { onSearch }
        style = {
            { backgroundColor: "orange" }
        }
        enterButton = { < SearchOutlined / > }
        allowClear style = {
            { maxWidth: 400 }
        }
        /> < /
        div >



        <
        table >
        <
        thead >
        <
        tr >
        <
        th > ID < /th> <th> Topic </th > < th > < /th>{" "} < /
        tr > { " " } <
        /thead>{" "} <
        tbody > { " " } {
            filteredTopics.map((topic) => ( <
                tr key = { topic.id } >
                <
                td > { topic.id } < /td> <td> {topic.name} </td >
                <
                td >
                <
                Link to = { "/questions/" + topic.id } > Do HomeWork < /Link>{" "} < /
                td > { " " } <
                /tr>
            ))
        } { " " } <
        /tbody>{" "} < /
        table > { " " } <
        />
    );
}
export default Topic;