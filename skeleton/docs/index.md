# ${{values.component_id}} Documentation

${{values.description}}

This leverages a LLM + RAG (Retrieval Augmented Generation), where additional context, additional private data is loaded and is additive to the prompt provided to the LLM.

## Setup

Install Podman DeskTop and AI Lab Extension: https://github.com/containers/podman-desktop-extension-ai-lab

Download the InstructLab Granite 7B model locally: **instructlab/granite-7b-lab-GGUF**

Start the model service


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

