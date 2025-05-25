import { useEffect, useState } from "react";
import { getUserAnswers } from "../../service/Answer";
import { getAllTopic } from "../../service/TopicService";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd"; // Thêm import Input từ Ant Design

const { Search } = Input;


function Answers() {
    const [answers, setAnswers] = useState([]);
    const [topic, SetTopic] = useState([]);
    const [search, setSearch] = useState('');
    useEffect(() => {
        const fetchApi = async() => {
            const response = await getUserAnswers();
            const topic = await getAllTopic();
            let result = [];

            for (let i = 0; i < response.length; i++) {
                result.push({
                    ...topic.find((item) => item.id == response[i].topicId),
                    ...response[i],
                });
            }
            console.log(result);
            setAnswers(result);
            SetTopic(result);
        };
        fetchApi();
    }, []);
    const onSearch = (value) => {
        setSearch(value);

        const filteredAnswers = answers.filter((answer) => answer.name.toLowerCase().includes(value.toLowerCase()));
        SetTopic(filteredAnswers);

    }
    return ( <
        >
        <
        div className = "title-find"
        style = {
            { marginBottom: "16px" }
        } >
        <
        h2 > List Topic you had done < /h2> <
        Search placeholder = "Search Answers..."
        onSearch = { onSearch }
        enterButton = { < SearchOutlined / > }
        allowClear style = {
            { maxWidth: 400 }
        }
        /> < /
        div > <
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
            topic.map((answer) => ( <
                tr key = { answer.id } >
                <
                td > { answer.id } < /td> <td> {answer.name} </td >
                <
                td >
                <
                Link to = { "/result/" + answer.id } > More Details < /Link>{" "} < /
                td > { " " } <
                /tr>
            ))
        } { " " } <
        /tbody>{" "} < /
        table > { " " } <
        />
    );
}
export default Answers;