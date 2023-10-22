FROM cypress/included:13.3.2

WORKDIR /app
COPY . .
ENTRYPOINT [ "./run_tests.sh" ]
