---
lang: ko-KR
title: How to Use AI to Automate Unit Testing with TestGen-LLM and Cover-Agent
description: Article(s) > How to Use AI to Automate Unit Testing with TestGen-LLM and Cover-Agent
icon: fa-brands fa-python
category: 
  - Python
  - AI
  - LLM
  - Article(s)
tag: 
  - blog
  - freecodecamp.org
  - py
  - python
  - ai
  - llm
head:
  - - meta:
    - property: og:title
      content: Article(s) > How to Use AI to Automate Unit Testing with TestGen-LLM and Cover-Agent
    - property: og:description
      content: How to Use AI to Automate Unit Testing with TestGen-LLM and Cover-Agent
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/freecodecamp.org/automated-unit-testing-with-testgen-llm-and-cover-agent.html
prev: /programming/py/articles/README.md
date: 2024-06-02
isOriginal: false
cover: https://freecodecamp.org/news/content/images/size/w1000/2024/06/Final-X3-Cover-FFC-Cover-Agent.png
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Python > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/py/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "LLM > Article(s)",
  "desc": "Article(s)",
  "link": "/ai/llm/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

---

<SiteInfo
  name="How to Use AI to Automate Unit Testing with TestGen-LLM and Cover-Agent"
  desc="It's important to write clear and efficient unit tests that actually work during the software development process. Unit tests separate out individual code elements and confirm that they work as intended.  Effective unit tests not only catch errors but also help you be confident that your code can be..."
  url="https://freecodecamp.org/news/automated-unit-testing-with-testgen-llm-and-cover-agent/"
  logo="https://cdn.freecodecamp.org/universal/favicons/favicon.ico"
  preview="https://freecodecamp.org/news/content/images/size/w1000/2024/06/Final-X3-Cover-FFC-Cover-Agent.png"/>

It's important to write clear and efficient unit tests that actually work during the software development process. Unit tests separate out individual code elements and confirm that they work as intended.

Effective unit tests not only catch errors but also help you be confident that your code can be maintained and is dependable. But it takes time and resources to manually create an extensive suite of unit tests.

There have been some recent developments in artificial intelligence that promise to help automate the unit test development processes. In February, researchers at Meta released a paper on [<FontIcon icon="fas fa-globe"/>Automated Unit Test Improvement using Large Language Models](https://arxiv.org/abs/2402.09171). This introduced an innovative method for automating unit testing.

<PDF url="https://arxiv.org/pdf/2402.09171"/>

Their research focuses on a new tool called `TestGen-LLM`, which explores the possibilities of using LLMs to analyze already-existing unit tests and improving on them to increase code coverage.

Although the code for the TestGen-LLM was not released, I will introduce an open-source alternative inspired by their research in this article. You'll learn how it generates test suites, why it's better than most LLMs, and where to get your hands on this technology and start trying it out.

[[toc]]

---

## Meta’s TestGen-LLM

Meta's TestGen-LLM tackles the time-consuming task of unit test writing by leveraging the power of Large Language Models (LLMs). General-purpose LLMs like Gemini or ChatGPT might struggle with the specific domain of unit test code, testing syntax, and generating tests that don't add value. But TestGen-LLM is specifically tailored for unit testing.

This specialization allows it to understand the intricacies of code structure and test logic, leading to more targeted test suites and generate tests that actually add value and increase code coverage.

TestGen-LLM is able to evaluate unit tests and identify areas for improvements. It achieves this through its understanding of common testing patterns which it has been trained with. But generating tests alone is insufficient for proper code coverage.

Meta's researchers implemented safeguards within TestGen-LLM to ensure the effectiveness of the tests it writes. These safeguards, referred to as `filters`, act as a quality control mechanism. They eliminate suggestions that:

- wouldn't compile
- fail consistently, or
- fail to actually improve code coverage (suggestions that are already covered by other tests).

---

## How Does TestGen-LLM Work?

TestGen-LLM uses an approach called "Assured LLM-based Software Engineering" (Assured LLMSE). TestGen-LLM simply augments an existing test class with additional test cases, retaining all existing test cases and thereby guaranteeing that there will be no regression.

![Test generation workflow(*[<FontIcon icon="fas fa-globe"/>From TestGen_LLM paper](https://arxiv.org/abs/2402.09171)*)](https://www.freecodecamp.org/news/content/images/2024/05/img-testgen-llm-paper.jpg)

The TestGen-LLM generates a bunch of tests, then filters out the tests that don’t run and drops any that don’t pass. Finally, it discards those that don't increase the code coverage.

After using the TestGen-LLM to automate a test suite, Meta used a human reviewer to accept or reject tests where the generated tests had an acceptance rate of 73% in their best reported cases.

According to the paper, TestGen-LLM generates a single test on each run that is then added to an existing test suite which was written previously by a developer. But it doesn’t necessarily generate tests for any given test suite.

The effectiveness of TestGen-LLM was demonstrated at Meta's internal test-a-thons. Here, the tool was used to analyze existing test suites and suggest improvements. The results were promising:

> “75% of TestGen-LLM's test cases built correctly, 57% passed reliably, and 25% increased coverage. During Meta's Instagram and Facebook test-a-thons, it improved 11.5% of all classes to which it was applied, with 73% of its recommendations being accepted for production deployment by Meta software engineers”.

Also, the recommendations from TestGen-LLM were deemed useful and relevant by the developers who took part in the test-a-thons.

---

## Open-Source Implementation (Cover-Agent)

The TestGen-LLM research from Meta has a lot of potential to change unit testing and automated test generation. The tool will likely help improve code coverage and speed up test creation by utilizing LLMs particularly trained on code. But this technology is not available for use by just anyone, since the code for the TestGen-LLM was not released.

Developers who have taken an interest in this technology are probably frustrated by the lack of publicly available code. After all, Meta's TestGen-LLM study provides a glimpse into the future of what automated testing can be.

It's quite appealing to be able to dive into the newest technology’s internal workings, comprehend its decision-making procedures, and maybe even help shape its evolution. But while the absence of Meta's code is a hindrance, there's an open-source implementation called `Cover-Agent` which can serve as a helpful alternative.

`CodiumAI's Cover-Agent` is the first open-source implementation of an automated testing tool based on TestGen-LLM. Inspired by Meta's research, Cover-Agent is now at the forefront of developments in open-source AI-driven unit testing as a result.

### Why are specific testing-focused LLMs necessary?

Since most LLMs (like ChatGPT and Gemini) are capable of generating tests, then why bother with a new technology?

Well, Cover-Agent and TestGen-LLM were created to be the next step in the evolution of efficient unit testing. Their aim is to avoid common pitfalls that developers run into when generating tests with LLMs such as:

- LLM Hallucination
- Generating tests that do not add value
- Generating tests that omit some parts of the code, resulting in low code coverage

To overcome such challenges (specifically for regression unit tests) the TestGen-LLM researchers came up with the following criteria which the generated tests must meet before the test can be accepted:

- Does the generated test compile and run properly?
- Does the test increase code coverage?
- Does it add value?
- Does it meet any additional requirements that we may have?

These are fundamental questions and issues that the generated test must solve before it is deemed an upgrade on the existing technology. Cover-Agent provides tests that answer these questions to an amazingly high degree.

---

## How Does Cover-Agent Work?

Cover-Agent is part of a broader suite of utilities designed to automate the creation of unit tests for software projects. Utilizing the TestGen-LLM Generative AI model, it aims to simplify and expedite the testing process, ensuring high-quality software development.

The system is made up of several components:

- **Test Runner**: Executes the command or scripts to run the test suite and generate code coverage reports.
- **Coverage Parser:** Validates that code coverage increases as tests are added, ensuring that new tests contribute to the overall test effectiveness.
- **Prompt Builder:** Gathers necessary data from the codebase and constructs the prompt to be passed to the Large Language Model (LLM).
- **AI Caller:** Interacts with the LLM to generate tests based on the prompt provided.

These components work together with TestGen-LLM to generate only tests that are guaranteed to improve the existing code base.

---

## How to Use Cover-Agent

### Requirements

You need to have the following requirements before you can begin using Cover-Agent:

- `OPENAI_API_KEY` set in your environment variables, which is required for calling the `OpenAI API`.
- Code Coverage tool: A Cobertura XML code coverage report is required for the tool to function correctly. For example, in Python you could use `pytest-cov.` Add the `--cov-report=xml` option when running Pytest.

### Installation

If you're running Cover-Agent directly from the repository, you will also need:

- Python installed on your system.
- Poetry installed for managing Python package dependencies. You can find installation instructions for Poetry [<FontIcon icon="fas fa-globe"/>here](https://python-poetry.org/docs/).

#### Standalone Runtime

You can install Cover-Agent as a Python Pip package or run it as a standalone executable.

#### Python Pip

To install the Python Pip package directly via GitHub, run the following command:

```sh
pip install git+https://github.com/Codium-ai/cover-agent.git
```

#### Binary

You can run the binary without any Python environment installed on your system (for example, within a Docker container that does not contain Python). You can download the release for your system by navigating to the project's [release page (<FontIcon icon="iconfont icon-github"/>`Codium-ai/cover-agent`)](https://github.com/Codium-ai/cover-agent/releases).

#### Repository Setup

Run the following command to install all the dependencies and run the project from source:

```sh
poetry install
```

#### Running the Code

After downloading the executable or installing the Pip package, you can now run Cover-Agent to generate and validate unit tests.

Execute it from the command line by using the following command:

```sh
cover-agent \
--source-file-path "path_to_source_file" \
--test-file-path "path_to_test_file" \
--code-coverage-report-path "path_to_coverage_report.xml" \
--test-command "test_command_to_run" \
--test-command-dir "directory_to_run_test_command/" \
--coverage-type "type_of_coverage_report" \
--desired-coverage "desired_coverage_between_0_and_100" \
--max-iterations "max_number_of_llm_iterations" \
--included-files "<optional_list_of_files_to_include>"
```

You can use the example projects within this repository to run this code as a test.

#### Command Arguments

- **source-file-path:** Path of the file containing the functions or block of code we want to test for.
- **test-file-path:** Path of the file where the tests will be written by the agent. It’s best to create a skeleton of this file with at least one test and the necessary import statements.
- **code-coverage-report-path:** Path where the code coverage report is saved.
- **test-command:** Command to run the tests (for example pytest).
- **test-command-dir**: Directory where the test command should run. Set this to the root or the location of your main file to avoid issues with relative imports.
- **coverage-type:** Type of coverage to use. Cobertura is a good default.
- **desired-coverage:** Coverage goal. Higher is better, though 100% is often impractical.
- **max-iterations:** Number of times the agent should retry to generate test code. More iterations may lead to higher OpenAI token usage.
- **additional-instructions:** Prompts to ensure the code is written in a specific way. For example, here we specify that the code should be formatted to work within a test class.

On running the command, the agent starts writing and iterating on the tests.

### How to Use Cover-Agent

It's time test out Cover-Agent. We will use a simple calculator.py app to compare the code coverage for manual and automated testing.

#### Manual Testing

```py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b
```

This is the test_calculator.py placed in the test folder.

```py
# tests/test_calculator.py
from calculator import add, subtract, multiply, divide

class TestCalculator:

    def test_add(self):
        assert add(2, 3) == 5
```

To see the test coverage, we need to install `pytest-cov`, a pytest extension for coverage reporting stated earlier.

```sh
pip install pytest-cov
```

Run the coverage analysis with:

```sh
pytest --cov=calculator
#
# Name            Stmts   Miss  Cover
# -----------------------------------
# calculator.py      10      5    50%
# -----------------------------------
# TOTAL              10      5    50%
```

The output above shows that 5 of the 10 statements in calculator.py are not executed, resulting in just 50% code coverage. For a larger code base, this will become a serious issue and lead to setbacks.

Now let's see if cover-agent can do better.

#### Automated Testing with Cover-Agent

To set up Codium's Cover-Agent, follow these steps:

First, install Cover-Agent:

```sh
pip install git+https://github.com/Codium-ai/cover-agent.git
```

Make sure that your `OPENAI_API_KEY` is set in your environment variables, as it is required for the OpenAI API.

Next, write the commands to start generating tests in the terminal:

```sh
cover-agent \
--source-file-path "calculator.py" \
--test-file-path "tests/test_calculator.py" \
--code-coverage-report-path "coverage.xml" \
--test-command "pytest --cov=. --cov-report=xml --cov-report=term" \
--test-command-dir "./" \
--coverage-type "cobertura" \
--desired-coverage 80 \
--max-iterations 3 \
--openai-model "gpt-4o" \
--additional-instructions "Since I am using a test class, each line of code (including the first line) needs to be prepended with 4 whitespaces. This is extremely important to ensure that every line returned contains that 4 whitespace indent; otherwise, my code will not run."
```

This generates the following code:

```py
import pytest
from calculator import add, subtract, multiply, divide

class TestCalculator:

    def test_add(self):
        assert(add(2, 3), 5

    def test_subtract(self):
        """
        Test subtracting two numbers.
        """
        assert subtract(5, 3) == 2
        assert subtract(3, 5) == -2

    def test_multiply(self):
        """
        Test multiplying two numbers.
        """
        assert multiply(2, 3) == 6
        assert multiply(-2, 3) == -6
        assert multiply(2, -3) == -6
        assert multiply(-2, -3) == 6

    def test_divide(self):
        """
        Test dividing two numbers.
        """
        assert divide(6, 3) == 2
        assert divide(-6, 3) == -2
        assert divide(6, -3) == -2
        assert divide(-6, -3) == 2

    def test_divide_by_zero(self):
        """
        Test dividing by zero, should raise ValueError.
        """
        with pytest.raises(ValueError, match="Cannot divide by zero"):
            divide(5, 0)
```

You can see that the agent also wrote tests that check for errors for any edge cases.

Now it's time to test the coverage again:

```sh
pytest --cov=calculator
#
# Name            Stmts   Miss  Cover
# -----------------------------------
# calculator.py      10      0   100%
# -----------------------------------
# TOTAL              10      0   100%
```

In this example we reached 100% code coverage. For larger code bases, the procedure is relatively the same. You can read through [<FontIcon icon="fa-brands fa-dev"/>this guide](https://dev.to/oluwadamisisamuel1/how-to-automate-test-generation-with-ai-using-codiumai-cover-agent-1kep) for a walkthrough on a larger code base.

While Cover-Agent represents a significant step forward, it's important to note that this technology is still in its early stages. Continued research and development are crucial for further refinement and broader adoption and codiumAI invites you to make your contributions to this open source tool.

---

## Benefits of the Open Source Cover-Agent

The open source nature of Cover-Agent offers several advantages that should help propel the technology forward. Among them are:

- **Accessibility:** Its open source nature enables LLM-based testing experimentation and it is accessible to developers with varying backgroundsThis will increase the number of users and lead to the development of a better technology and more applications..
- **Cooperation:** Developers are able to make contributions, suggest enhancements, propose new features and report issues. Cover-Agent will grow and develop quickly into a project perfect for developers..
- **Transparency:** Information about the internal operations are available and this promotes trust and will ultimately increase the potential for the technology.

In addition to it’s open-source advantages, Cover-Agent provides developers with a strong set of benefits of its own:

- **Simple Access:** Developers can easily install and experiment with LLM-based testing. This allows for firsthand and immediate exploration of the technology's capabilities and with little to no disruption in their workflow.
- **Customization for Specific Needs:** Cover-Agent's open-source nature allows developers to adapt the tool to their specific project requirements. This could involve modifying the LLM model used, adjusting training data to better reflect their codebase, or integrating Cover-Agent with existing testing frameworks. This level of customization empowers developers to leverage the power of LLM-based testing in a way that aligns with their project needs.
- **Easy Integration:** It is easily integrated with VSCode (a popular code editor) which makes integration with existing workflows a breeze. You can also easily integrate it with existing human-written tests.

---

## How Can You Contribute to Cover-Agent?

Cover-Agent source code is publicly available through [this GitHub repo (<FontIcon icon="iconfont icon-github"/>`Codium-ai/cover-agent`)](https://github.com/Codium-ai/cover-agent). They encourage developers of all backgrounds to test their product and make contributions to further improve and grow this new technology.

---

## Conclusion

LLM-based test improvement tools hold immense potential for revolutionizing the way developers approach unit testing. By leveraging the power of large language models specifically trained on code, these tools can streamline test creation, improve code coverage, and ultimately enhance software quality.

While Meta's research with TestGen-LLM offers valuable insights, the lack of publicly available code hinders wider adoption and ongoing development. Fortunately, Cover-Agent has provided a readily accessible and customizable solution. It empowers developers to experiment with LLM-based testing and contribute to its evolution.

The potential for the TestGen-LLM and Cover-Agent is immense, and further development through contributions by developers will lead to a revolutionary tool that will transform automated test generation forever.

<PDF url="https://arxiv.org/pdf/2402.09171" />

<SiteInfo
  name="We created the first open-source implementation of Meta’s TestGen–LLM | CodiumAI"
  desc="Most LLMs that are competent at generating code, such as ChatGPT, Gemini, and Code Llama, are capable of generating tests."
  url="https://codium.ai/blog/we-created-the-first-open-source-implementation-of-metas-testgen-llm/"
  logo="https://codium.ai/wp-content/uploads/2023/03/cropped-codium-fav-150x150.png"
  preview="https://codium.ai/wp-content/uploads/2024/05/img-ci-agent-1.jpg"/>

<SiteInfo
  name="How to Automate Test Generation with AI: Using CodiumAI Cover-Agent - DEV Community"
  desc="Writing clean, well-tested code is a cornerstone of robust software development. Unit testing plays a... Tagged with unittest, productivity, ai, programming."
  url="https://dev.to/oluwadamisisamuel1/how-to-automate-test-generation-with-ai-using-codiumai-cover-agent-1kep"
  logo="https://res.cloudinary.com/practicaldev/image/fetch/s--E8ak4Hr1--/c_limit,f_auto,fl_progressive,q_auto,w_32/https://dev-to.s3.us-east-2.amazonaws.com/favicon.ico"
  preview="https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fmxvb0m6e98p9fa7bkdhe.png"/>

Connect with me on [LinkedIn (<FontIcon icon="fa-brands fa-linkedin"/>`samuel-oluwadamisi-01b3a4236`)](http://linkedin.com/in/samuel-oluwadamisi-01b3a4236) and [Twitter (<FontIcon icon="fa-brands fa-x-twitter"/>`Data_Steve_`)](https://x.com/Data_Steve_) if you found this helpful.

---

<TagLinks />