# ${{values.component_id}} Documentation

${{values.description}}

This leverages a LLM + RAG (Retrieval Augmented Generation), where additional context, additional private data is loaded and is additive to the prompt provided to the LLM.

## Setup

Go to https://openai.com/blog/openai-api

Sign up

Create an API key https://platform.openai.com/api-keys

Provide a credit card for Billing https://platform.openai.com/account/billing/overview

Monitor usage https://platform.openai.com/usage

Create a .env file in the root of the project to hold the API key

```
QUARKUS_LANGCHAIN4J_OPENAI_API_KEY=<insert openai.com API key here>
```

## Running the application in dev interactive mode
You can run your application in dev mode that enables live coding using:
```shell script
./mvnw compile quarkus:dev
```

```
open http://localhost:8080
```

![AI Buddy](./readme-images/main-screen.png)

## Interacting with the application

Example questions for the Bank

**what are the different types of accounts?**

**what is the minimum deposite for each?**

**what are the fees for each?**

Example questions for the Museum

**please describe youre exhibitions**

**what is the minimum size for a youth group visit**

**what were the inspirations for Elijah Montrose?**

## Parts

**Bot.java** provides the name for the AI

**IngestorExample.java** handles the sucking in of the resources/catalog/*.txt files as additional data to inform the LLM.  "bank" and "museum" are two options to contextualize the AI.

**RetrieverExample.java** handles the merging of this additional data into the prompt that is sent to the LLM

To see this additional prompt, turn on logging 

application.properties

```
quarkus.langchain4j.openai.log-requests=true
```

