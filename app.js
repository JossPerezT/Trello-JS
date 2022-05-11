require("dotenv").config();

// eslint-disable-next-line no-undef
if (!process.env.TOKEN && !process.env.KEY) {
    throw new Error("No hay configuración con Api Key y con Token");
}

const Trello = require("trello");
// eslint-disable-next-line no-undef
let trello = new Trello(process.env.Key, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;

trello.addCard(cardTitle, "LaunchX Card Description", "6264e42be72d295e64f5c083", (error, trelloCard) => {
    if (error) {
        console.log("Could not add card: ", error);
    }
    else {
        console.log("Added card: ", trelloCard);
    }
});

trello.getCardsOnList(listId, callback);
