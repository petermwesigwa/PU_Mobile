#######################################################################################
### This is the RESTful API I will use for the PU Mobile application.
### Authors: Vinay Ramesh
### Authors: Peter Mwesigwa
#######################################################################################


from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import datetime
import os
import sys
import logging 

app = Flask(__name__)

# Helps with the location of the directory
basedir = os.path.abspath(os.path.dirname(__file__))

# Which database will we fetch from?
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'crud.sqlite')

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)
#######################################################################################

class News(db.Model):
	headline = db.Column(db.Unicode, unique = False)
	image = db.Column(db.Unicode, unique = False)
	date = db.Column(db.Unicode, unique = False)

	def __init__(self, headline, image, date):
		self.headline = headline
		self.image = image
		self.date = date

class NewsSchema(ma.Schema):
	class Meta:
		fields = ('headline', 'image', 'date')

news_schema = NewsSchema()
news_schemas = NewsSchema(many=True)

#######################################################################################

@app.route('/news/<dtdate>', methods = ["GET"])
def getNews(dtdate):
	news = News.query.filter_by(date=dtdate).all()
	result = news_schemas.dump(news)
	return jsonify(result.data)

#######################################################################################

@app.route('/news', methods = ["POST"])
def createNews():
	headline = request.json['headline']
	image = request.json['image']
	date = request.json['date']

	new_news = News(headline, image, date)

	db.session.add(new_news)
	db.session.commit()

	return news_schema.jsonify(new_news)

#######################################################################################


if __name__ == '__main__':
	app.run(debug=True)









