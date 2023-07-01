import os
from dotenv import load_dotenv, find_dotenv

_ = load_dotenv(find_dotenv())  # read local .env file
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate


def processInputAI(location: str, start_date: str, end_date: str, num_travelers: str):
    ChatOpenAI.api_key = os.environ["OPENAI_API_KEY"]

    template_string = """Based on the information delimited by triple backticks, 
    generate a detailed recommendation for the trip, including popular attractions, weather conditions, 
    recommended accommodations, transportation options, and any additional tips that might be need.
    Information: ```
    Location: {location}
    Start Date: {start_date}
    End Date: {end_date}
    Number of Travelers: {num_travelers}
    ```
    """

    llm = ChatOpenAI(temperature=0.0)
    prompt_template = ChatPromptTemplate.from_template(template_string)

    # to modify prompt and pass user input
    input_prompt = prompt_template.format_messages(
        location=location,
        start_date=start_date,
        end_date=end_date,
        num_travelers=num_travelers,
    )

    # turn into chat response
    response = llm(input_prompt)
    return response
