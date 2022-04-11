![image](https://user-images.githubusercontent.com/79255543/161380734-ca557975-d73d-439d-bf07-938d546347ca.png)
# Moles Classifier / Starter template for deploying [fast.ai](https://www.fast.ai) models 
Based on [this template](https://github.com/muellerzr/fastai-v3-Render)

This repo can be used as a starting point to deploy [fast.ai](https://github.com/fastai/fastai) models.

The sample app described here is up at http://moles-classifier.herokuapp.com/ Test it out with moles images!

You can test your changes locally by installing Docker and using the following command:

```
docker build -t moles-classifier . && docker run --rm -it -p 5000:5000 moles-classifier
```

It will run a container and initiate server.py and serve app/view/index.html on your localhost:5000

# You'd like to do the following: 

1. Replace _export.pkl_ (fast.ai model) in /app/ with your fast.ai classifier. 
2. In server.py, edit the class names (predicted categories) to match your model.
3. Customize the UI of _app/view/index.html_
                   and _app/static/style.css_

4.  [Deploying to Heroku](https://github.com/falulon/moles-classifier/issues/1) 

##### **A. Install Heroku, log in and make sure it is connected to your Github account**

##### **B. Create a new pipeline**
- choose the repo from github, connect and create a Pipeline.

![image](https://user-images.githubusercontent.com/79255543/161379274-05585c2c-2e3b-4b68-9597-60f740f2957c.png)
##### **C. Under Staging, New app, create new App.**

![image](https://user-images.githubusercontent.com/79255543/161379308-6acfe51d-e2c9-4da3-b421-e193d9ad7ed4.png)
##### **D. Edit App Settings**
- Change the stack from heroku to container by running this command in your terminal:
`heroku stack:set container --app my-classifier-app-name`
– Enable Automatic deploys (still in App settings) 
– Deploy

![image](https://user-images.githubusercontent.com/79255543/161379353-f350c3fe-9651-4037-98c8-89027264e693.png)


If there is some error, find it by running: 
`heroku logs --tail`

You may like to run also
```
heroku git:remote -a my-classifier-app-name
heroku addons:add heroku-postgresql:hobby-dev --app my-classifier-app-name
```

### **The app is up and updates on every time you make some changes and push to Github.**





Background photo: [Leandro Fregoni (unsplash)](https://unsplash.com/@okcapturas)





