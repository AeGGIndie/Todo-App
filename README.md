# ToDo App
This project was bootstrapped using [Wasp](https://wasp-lang.dev/) and was intended for learning purposes. It can be found [here]()

## Commands

In the project directory, you must have wasp installed first to run it locally. The following are commands you can run:

### `wasp start`

Runs the whole app (backend, database, frontend) in development mode.

### `wasp db migrate-dev`

Updates any new changes made to the `main.wasp` file in regards to the schema.

It's important to mention that the schema written in the `main.wasp` file is programmed in PSL (Prisma Schema Language) and uses Prisma Studio as an ORM for database mapping.

### `wasp build`

Generates build files for the whole project for deployment.

## Notes

Overall, the process with bootstrapping a Wasp project was relatively simple. I challenged myself by adding more front-end functionality and styling to beautify the code. All the back-end and database functionalities were easily taken care of using little to no Node.js/Express/Prisma knowledge.