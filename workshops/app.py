from flask import Flask, render_template, request, redirect, url_for
from markupsafe import Markup

app = Flask(__name__)
entries = []

@app.route("/")
def home():
    return render_template("books.html",entries=entries)

entries = []

@app.route("/add",methods=["POST"])
def add_entry():
    entries.append(request.form["entryText"])
    return redirect(url_for("home"))


@app.route("/entries")
def get_all_entries():
    return [Markup.escape(x) for x in entries]

