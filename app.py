from flask import Flask
from flask import render_template


app = Flask(__name__)
app.debug = True

def get_nav_bar():
    return [
        ('/', 'about', 'About'),
        ('/portfolio', 'portfolio', 'Portfolio'),
        ('/writing', 'writing', 'Writing'),
        ('/talks', 'talks', 'Talks'),
        ('/bookmarks', 'bookmarks', 'Bookmarks')
    ]


@app.route('/')
def about():
    data = {
        'nav_list': get_nav_bar(),
        'active_page': 'about'
    }

    return render_template('about.html', view_data = data)


@app.route('/portfolio')
def portfolio():
    data = {
        'nav_list': get_nav_bar(),
        'active_page': 'portfolio'
    }

    return render_template('portfolio.html', view_data = data)

if __name__ == "__main__":
    app.run()
