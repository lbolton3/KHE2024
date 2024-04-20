from pptx import Presentation

def text_extraction(ppt_file):
    presentation = Presentation(ppt_file)

    extracted_text = []

    for slides in presentation.slides:
        for shape in slides.shapes:
            if hasattr(shape, "text"):
                extracted_text.append(shape.text)

    combined_text = "\n".join(extracted_text)

    return combined_text

# Example usage
ppt_file = "slides/h.pptx"
extracted_text = text_extraction(ppt_file)
print(extracted_text)


