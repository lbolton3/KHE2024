document.getElementsByTagName("a")
let as = document.getElementsByTagName("a")

let urls = [];
for(a of as){
    urls.push(a.href)
}

let ppts = []

for(url of urls){
    if(url.endsWith(".ppt") || url.end){
        ppts.push(url);
    }
}

console.log(ppts)

// ['http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L01intro.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L02msvcpp.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L03vars.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L04operations.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L05if.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L06while.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L07libfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L08userfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L09multfiles.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L10voidfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L12arrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L14strings.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15io.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L32namespaces.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15structs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L16classes.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L19pointers.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L20dynamicmemory.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L33DynamicObjects.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L26vectors.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L31MultArrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L23recursion.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L22diagrams.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L28exceptions.ppt']


['http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L01intro.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L02msvcpp.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L03vars.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L04operations.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L05if.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L06while.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L07libfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L08userfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L09multfiles.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L10voidfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L12arrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L14strings.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15io.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L32namespaces.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15structs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L16classes.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L19pointers.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L20dynamicmemory.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L33DynamicObjects.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L26vectors.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L31MultArrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L23recursion.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L22diagrams.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L28exceptions.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L01intro.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L02msvcpp.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L03vars.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L04operations.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L05if.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L06while.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L07libfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L08userfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L09multfiles.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L10voidfuncs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L12arrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L14strings.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15io.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L32namespaces.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L15structs.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L16classes.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L19pointers.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L20dynamicmemory.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L33DynamicObjects.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L26vectors.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L31MultArrays.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L23recursion.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L22diagrams.ppt', 'http://antares.cs.kent.edu/~mikhail/classes/csi/Slides/L28exceptions.ppt']