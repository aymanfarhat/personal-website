from flask import Flask
from flask import render_template


app = Flask(__name__)
app.debug = True


@app.route('/')
def about():
    return render_template('about.html')


@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

if __name__ == "__main__":
    app.run()
