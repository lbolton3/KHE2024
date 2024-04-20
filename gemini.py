apikey = "abdibrabvaebvadfbcianahgvyr-ABC"

def generatequestionsgeminai(text):
    endpoint = "https://api.gemini.com/question-generation"  # Example endpoint (Replace with actual endpoint)
    headers = {"Authorization": f"Bearer {apikey}"}
    data = {"text": text, "num_questions": 5}  # Example request data (Replace with actual parameters)

    response = requests.post(endpoint, headers=headers, json=data)

    if response.status_code == 200:
        questions = response.json().get("questions", [])
        return questions
    else:
        print("Error:", response.status_code)
        return []

def main():
    ppt_file = "h.pptx"
    extracted_text = text_extraction(ppt_file)
    questions = generate_questions_geminai(extracted_text)
    for i, question in enumerate(questions, 1):
        print(f"Question {i}: {question}")

if __name == "__main":
    main()