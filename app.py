import json
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
        'active_page': 'portfolio',
        'products': []
    }

    with open('data/products.json') as data_file:    
        data['products'] = json.load(data_file)

    return render_template('portfolio.html', view_data = data)


@app.route('/writing')
def writing():
    data = {
        'nav_list': get_nav_bar(),
        'active_page': 'writing'
    }

    return render_template('writing.html', view_data = data)


@app.route('/talks')
def talks():
    data = {
        'nav_list': get_nav_bar(),
        'active_page': 'talks'
    }

    return render_template('talks.html', view_data = data)



@app.route('/bookmarks')
def bookmarks():
    data = {
        'nav_list': get_nav_bar(),
        'active_page': 'bookmarks'
    }

    return render_template('bookmarks.html', view_data = data)



if __name__ == "__main__":
    app.run()
