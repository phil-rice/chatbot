# Chatbot

This is a simple chatbot implementation

# Running the chatbot

## Configuration
This is a .env_sample file. This needs to be copied to a .env file and the values need to be filled in.

## Running the chatbot
This chatbot uses [`parcel`](https://www.npmjs.com/package/parcel) to bundle the code. To run the chatbot, run the following commands:

```bash
npm start
```

# How it works

* The query is sent to elasticsearch
* The results are then sent to the chatbot with some prompt engineering
* The chatbot then sends the results to the user

# Elasticsearch
Is configurable in the .env file

# Issues
* Currently no known issues

# Roadmap
* There are assumptions about the shape of the data in 'elasticsearch'. These should be injected. 
* It doesn't handle the url of the content yet. Mostly because the index I use by default doesn't have a url field yet!
* A 'loading' spinner, or even better the `chat gpt loading...` would be nice
* Maybe we want to do something when no messages

