import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTopicId } from "../../service/TopicService";
import { getListQuestions } from "../../service/QuestionService";
import { getCookie } from "../../helpers/cookie";
import { collectAnswer } from "../../service/Answer";
import "./style.css";
import { Col, Row } from "antd";

function Questions() {
    const navigate = useNavigate();
    const param = useParams();

    const [dataTopic, setDataTopic] = useState([]);
    const [dataQuestion, setDataQuestion] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const questionRefs = useRef({});
    // ✅ Scroll tới câu hỏi
    const scrollToQuestion = (questionId) => {
        const targetRef = questionRefs.current[questionId];
        if (targetRef && targetRef.scrollIntoView) {
            targetRef.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Gửi bài làm
    const handleSubmit = async(e) => {
        e.preventDefault();
        let selectedAnswer = [];

        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;
                selectedAnswer.push({
                    questionId: parseInt(name),
                    answer: parseInt(value),
                });
            }
        }

        const option = {
            userId: getCookie("id"),
            topicId: parseInt(param.id),
            answers: selectedAnswer,
        };

        const response = await collectAnswer(option);
        if (response) {
            navigate(`/result/${response.id}`);
        }
    };

    // Lấy dữ liệu chủ đề
    useEffect(() => {
        const fetchTopic = async() => {
            const response = await getTopicId(param.id);
            setDataTopic(response);
        };
        fetchTopic();
    }, [param.id]);

    // Lấy danh sách câu hỏi
    useEffect(() => {
        const fetchQuestions = async() => {
            const response = await getListQuestions(param.id);
            setDataQuestion(response);
        };
        fetchQuestions();
    }, [param.id]);

    return ( <
        >
        { /* Header */ } <
        div style = {
            { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }
        } >
        <
        h2 > Bắt đầu làm bài: { dataTopic && dataTopic.name } < /h2> <
        div > ⏰Thời gian còn lại: < strong > ... < /strong></div >
        <
        /div>

        <
        button onClick = {
            () => navigate(-1)
        }
        style = {
            { marginBottom: "1rem" }
        } > 🔙Quay lại <
        /button>

        <
        Row gutter = {
            [24, 24]
        } > { /* Khu vực câu hỏi */ } <
        Col span = { 18 } >
        <
        form onSubmit = {
            async(e) => {
                e.preventDefault();
                const isConfirmed = window.confirm("Bạn có chắc chắn muốn nộp bài?");
                if (isConfirmed) {
                    await handleSubmit(e);
                }
            }
        } > {
            dataQuestion.map((item, index) => ( <
                    div className = "main-question"
                    key = { item.id } >
                    <
                    div className = "form_questions-box" >
                    <
                    p className = "question-title" >
                    Câu { index + 1 }: { item.question } <
                    /p> {
                    item.answers.map((itemAns, indexAns) => ( <
                        div className = "form_question-answer"
                        key = { indexAns } >
                        <
                        input required type = "radio"
                        id = { `quiz-${item.id}-${indexAns}` }
                        name = { item.id }
                        value = { indexAns }
                        onChange = {
                            () => {
                                if (!answeredQuestions.includes(item.id)) {
                                    setAnsweredQuestions((prev) => [...prev, item.id]);
                                }
                            }
                        }
                        /> <
                        label htmlFor = { `quiz-${item.id}-${indexAns}` } > { itemAns } <
                        /label> < /
                        div >
                    ))
                } <
                /div> < /
                div >
            ))
    }

    <
    button type = "submit"
    className = "submit-button" >
        Gửi bài <
        /button> < /
    form > <
        /Col>

    { /* Khu vực danh sách các câu */ } <
    Col span = { 6 } >
        <
        div className = "list-questions-panel" >
        <
        h3 > Danh sách câu đã chọn < /h3> <
    div className = "list-questions" > {
            dataQuestion.map((item, index) => ( <
                button key = { item.id }
                onClick = {
                    () => scrollToQuestion(item.id)
                }
                className = { `question-btn ${
                                        answeredQuestions.includes(item.id) ? "answered" : ""
                                    }` } > { String(index + 1).padStart(2, "0") } <
                /button>
            ))
        } <
        /div> < /
    div > <
        /Col> < /
    Row > <
        />
);
}

export default Questions;