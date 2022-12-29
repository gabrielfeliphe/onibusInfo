FROM public.ecr.aws/lambda/nodejs:18
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm i
COPY . /app 
CMD ["server.handler"]
