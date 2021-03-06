# lilex

> Parses Life Lexicon to JSON

## The Life lexicon

The Life Lexicon

> ... is a lexicon of terms relating to John Horton Conway's Game of Life.

The latest versions of this lexicon (both HTML and ASCII) should be available from the [Life Lexicon Home Page][life-lexicon].

## Requirements

Download and expand the [plain text ASCII version][life-lexicon-ascii] of the Life Lexicon. Once expanded, you will end-up with a directory with the following files:

```
lex_asc
├── README
├── emacs.txt
├── lexicon-clean.txt
├── lexicon-small.txt
├── lexicon.txt
└── lifelex.el
```

The file that you need to use is `lexicon.txt`.

## Usage

```
npm install -g @grancalavera/lilex

lilex [path/to/lexicon.txt] > lexicon.json
```

## Why?

I was looking for sources of patterns for a Game of Life side project, and I ended up finding the [Life Lexicon Home Page][life-lexicon], which is an amazing on-line resource of all-things Game of Life. I started copy pasting pattens and writing small scripts to convert them into consumable JSON data, and at some point I decided I wanted them all.

There are several download formats for the Life Lexicon, and the [plain text ASCII version][life-lexicon-ascii] is very regular and easy to parse. And that's the story.

## What will you get?

The Life Lexicon is divided in to three main sections:

1. An introductory section. This section includes a brief introduction to the Life Lexicon, along with credits, project description, format description and project scope.

1. A list of terms related to the Game of Life. Some of this terms are patters and some of them are not. lilex parses all the terms and them split them into two separate categories:
    - terms: includes non-pattern and pattern terms
    - patterns: includes only terms which are patterns

1. Bibliography.

Running lilex will produce a JSON stream to stdout. This stream is a single object with three entries, which looks like this:

```
{
  "introduction": ...,
  "terms": ...,
  "patterns": ...,
  "bibliography": ...
}
```

[life-lexicon]:http://www.argentum.freeserve.co.uk/lex_home.htm
[life-lexicon-ascii]:http://www.argentum.freeserve.co.uk/lex_asc.zip
