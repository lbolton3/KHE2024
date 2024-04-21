import Header from "./Header";
import { useState } from "react";

const Main = () => {
    const courses = {
        "CS-1A": [
            { id: 1, name: "Introduction to Programming" },
            { id: 2, name: "Variables" },
            { id: 3, name: "Data Types" },
            { id: 4, name: "Operators" }
        ],
        "CS-1B": [
            { id: 5, name: "Control Flow" },
            { id: 6, name: "Functions" },
            { id: 7, name: "Arrays" },
            { id: 8, name: "Recursion" }
        ],
        "CS-2": [
            { id: 9, name: "Data Structures" },
            { id: 10, name: "Algorithms" },
            { id: 11, name: "Object-Oriented Programming" }
        ],
        "CS-3": [
            { id: 12, name: "Software Engineering" },
            { id: 13, name: "Databases" },
            { id: 14, name: "Computer Networks" }
        ]
    };

    // State to track selected course and topic
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedTopic, setSelectedTopic] = useState("");

    // Function to handle course selection
    const handleCourseChange = (event) => {
        const course = event.target.value;
        setSelectedCourse(course);
        // Reset selected topic when course changes
        setSelectedTopic("");
    };

    // Function to handle topic selection
    const handleTopicChange = (event) => {
        const topic = event.target.value;
        setSelectedTopic(topic);
    };

    // Function to handle "Start" button click
    const handleStartClick = () => {
        // Send selectedCourse and selectedTopic to the backend
        console.log("Selected Course ID:", selectedCourse);
        console.log("Selected Topic ID:", selectedTopic);
        // Add your backend logic here
    };

    return (
        <>
            <Header />
            <section className="container">
                <h4 className="explain">Practice Quiz based on your slides</h4>
                <p className="des">Please use the drop-down menu to choose the courses
                    and related concepts for the quiz.
                </p>
                <div className="dropdown-container">
                    <select className="dropdown" value={selectedCourse} onChange={handleCourseChange}>
                        <option value="">Select a course</option>
                        {Object.keys(courses).map((course) => (
                            <option key={course} value={course}>{course}</option>
                        ))}
                    </select>
                    {/* Second dropdown options based on selected course */}
                    <select className="dropdown" value={selectedTopic} onChange={handleTopicChange}>
                        <option value="">Select a topic</option>
                        {selectedCourse && courses[selectedCourse].map((topic) => (
                            <option key={topic.id} value={topic.id}>{topic.name}</option>
                        ))}
                    </select>
                </div>
                <button onClick={handleStartClick}>Start</button>
            </section>
        </>
    );
};

export default Main;
