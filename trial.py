from pptx import Presentation
# from collections import counter

def text_extraction(ppt_file):
    presentation = Presentation(ppt_file)

    extracted_text = []

    for slides in presentation.slides:
        # print("----------------------------- End of Slide -------------------------------")
        for shape in slides.shapes:
            if hasattr(shape, "text"):
                extracted_text.append(shape.text)
        extracted_text.append("----------------------------- End of Slide -------------------------------")

    combined_text = "\n".join(extracted_text)

    return combined_text

# Example usage
ppt_file = "slides/h.pptx"
extracted_text = text_extraction(ppt_file)
print(extracted_text)

inputFile = "first-output1.txt"
freq_list = []

with open(inputFile,'r') as fileData:
    for textLine in fileData:
        wordsList = textLine.split()


