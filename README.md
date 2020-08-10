### To run this app

#### In your terminal
 
 * Run the UI
  1. spago install
  2. npm install
  3. npm run dev
  
 * Compile minsky addon
  1. cd minsky_addon
  2. install minsky dependencies
  3. npm install
  4. npm run build 

### some hints on minsky

 * Read the install docs, use the json-spirit from the linux-repo HPC makes available. The json-spirit lib from other sources will not work.

### What is this project...

Its an attempt to understand the codebase, and work on a electron UI. At some point there 
will be a implementation in rust...

### ToDo

1. Replace main-loop with adapter between tk-events and js-events
2. Use objwrap napi-addon-api on the Items hierarhcy
3. Setup the electron menu and context menu
4. ... all the things