# TypeScript + Jest + ESLint boilerplate

[![codecov](https://codecov.io/gh/Euromance/ts-jest-boilerplate/branch/master/graph/badge.svg?token=FPQNIRM2AD)](https://codecov.io/gh/Euromance/ts-jest-boilerplate)

TDD and everything.
Boilerplate code to avoid configuring TypeScript compiler, the test suite and linter.
All the source code and tests are to be placed under `./src` and `./tests` directories respectively.
Current config enforces dangling commas, single quotes, semicolons and everything.
Repo also includes sample code, sample test and a sample GitHub Actions workflow with auto linting and testing.
It uploads code coverage to codecov.io as well! Just add your repo in it's settings and it's done, no need in changing GitHub actions workflow.
Although you'll have to add some codecov.io token or whatever for private repos. Duh.
Just clone it and do whatever is on your mind. You can purge the `./git` directory and initialize your repo.
I don't care about forking or stars or mentions or whatever, just use it. No copyrights whatsoever.

_I find this enormous zoo of JS tooling overwhelming, each of them using their own config file and style and packages and whatever. Python is much simpler as there is PEP8. Feel free to contribute and improve!_

_chai mocha jest prettier eslint tslint airbnb configs istanbul 120 char max line length tsc babel es wtf is going on???_

_at least package.json scripts section makes more sense than poetry and pipenv and venv and whatever. although makefiles were a way to go!_
