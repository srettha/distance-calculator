# distance-calculator
[![CircleCI](https://circleci.com/gh/thestrayed/distance-calculator.svg?style=svg)](https://circleci.com/gh/thestrayed/distance-calculator) [![Coverage Status](https://coveralls.io/repos/github/thestrayed/distance-calculator/badge.svg?branch=master)](https://coveralls.io/github/thestrayed/distance-calculator?branch=master)

Simple yet interesting challenge from [doro.asia](doro.asia). This project comes with rollup and everything so you could also extend this as your private library too.

# Overview

The concept of this calculator is pretty simple. Here is how it calculates the price based on given base price.

| Distance |Rate|
| -------- |:--:|
| 0 - 40   | 12 |
| 41 - 100 | 11 |
| 101++    | 10 |

E.g. if distance is `120` then the calculation would be something like this

```
(40 * 12) + ((100 - 40) * 11) + ((120 - 100) * 10) + 450 = 1790
```

# Getting started

### Installation

1. Clone project

1. Install project's dependencies

    ```bash
    yarn
    ```

### Test

1. Running follow command to execute test

    ```bash
    yarn test
    ```

