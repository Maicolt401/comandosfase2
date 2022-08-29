// ArtyomCommands.js
export default class ArtyomCommandsManager {
  // The ArtyomCommandsManager class expects as argument in the constructor
  // an already declared instance of Artyom.js
  constructor(ArtyomInstance) {
    this._artyom = ArtyomInstance;
  }

  loadCommands() {
    let Artyom = this._artyom;

    return Artyom.addCommands([
      {
        indexes: ["hello", "hi"],
        action: () => {
          Artyom.say("Hello, how are you?");
        },
      },
      {
        indexes: [/How are you/, /Regular expressions supported/],
        smart: true,
        action: () => {
          Artyom.say("I'm fine, thanks for asking !");
        },
      },
      {
        indexes: ["Generate reports of * of this year"],
        smart: true,
        action: (i, month) => {
          let year = new Date().getFullYear();

          Artyom.say(`Generating reports of ${month} ${year} `);

          Artyom.say(
            "Ready ! What were you expecting? write some code you lazy bear !"
          );
        },
      },
    ]);
  }
}
