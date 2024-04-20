from flask import Flask, render_template,request, url_for, redirect # pulls templates from template directotry

app = Flask(__name__)

entries = [] 

@app.route("/")
def myBlog():
    return render_template("books.html",entries=entries)

# Get , Post , Put, Patch, Delete
@app.route("/add",methods=[ "POST" ])
def add():
    entries.append(request.form["entryText"])
    return redirect(url_for("myBlog")) # name of function


# @app.route("/add", method=[ "DELETE" ])
# def delete():
