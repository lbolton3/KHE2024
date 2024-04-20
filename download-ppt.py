import requests


# We obtained this list of urls from the browser
urls = ['http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L01intro.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L02msvcpp.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L03vars.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L04operations.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L05if.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L06while.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L07libfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L08userfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L09multfiles.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L10voidfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L12arrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L14strings.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15io.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L32namespaces.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15structs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L16classes.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L19pointers.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L20dynamicmemory.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L33DynamicObjects.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L26vectors.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L31MultArrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L23recursion.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L22diagrams.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L28exceptions.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L01intro.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L02msvcpp.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L03vars.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L04operations.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L05if.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L06while.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L07libfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L08userfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L09multfiles.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L10voidfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L12arrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L14strings.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15io.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L32namespaces.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15structs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L16classes.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L19pointers.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L20dynamicmemory.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L33DynamicObjects.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L26vectors.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L31MultArrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L23recursion.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L22diagrams.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L28exceptions.ppt']

# r = requests.get(url, allow_redirects=True)

# open("01-cs1a.pptx","wb").write(r.content)
# print(r.headers.get("content-type"))

response = requests.get("https://api.github.com")

# if response: # if status code bw 200 and 399
#     print("Success")
# else:
#     raise Exception("non success status cpde: {response.status_code}")

# print(response.content)
# print(type(response.text))

# response.encoding = "utf-8"
# print(response.text)

for index,url in enumerate(urls):
    respObj = requests.get(url)
    with open(str(index)+"cs1-ppt.ppt","wb") as f:
        f.write(respObj.content)
