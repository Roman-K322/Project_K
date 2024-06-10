from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def main():
    return render_template('main.html')
@app.route("/templates/<page>")
def pages(page):
    return render_template(f"{page}.html")


@app.route("/reader/<book>")
def reader(book):
    return render_template(f"{book}.html")



if __name__ == "__main__":
    app.run(debug=True)