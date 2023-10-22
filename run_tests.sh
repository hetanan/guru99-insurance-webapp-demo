#!/bin/bash

#whatever commands you need to run to execute tests
npm ci
npm run precy:run
npm run cypress:run
cypressRunResult=$? #save the result of the last command for pipeline status
npm run report:merge
npm run report:generate
exit $cypressRunResult