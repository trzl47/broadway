FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install
RUN npm install autoprefixer axios react-dom react-redux react-router-dom redux --save
# RUN npm install react-scripts@0.9.5 -g
RUN npm install react-scripts -g

# start app
CMD ["npm", "start"]