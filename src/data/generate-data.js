// TODO: imp exp....
import { faker } from "@faker-js/faker";

function randomBetween(min = 1, max = 10) {
  return Math.floor(Math.random() * max) + min;
}

function makeBoard() {
  return {
    title: faker.company.companyName(),
    status: randomBetween(1, 4),
    id: faker.datatype.uuid(),
    cards: [],
  };
}

// eslint-disable-next-line no-unused-vars
function makeCard() {
  return {
    id: faker.datatype.uuid(),
    priority: randomBetween(0, 3),
    text: faker.company.companyName(),
    users: [],
  };
}

// eslint-disable-next-line no-unused-vars
export function makeUser() {
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    avatar: faker.image.avatar(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
  };
}

/**
 User (
 id:
 first_name:
 last_name:
 avatar:
 email:
 )
 **/

// eslint-disable-next-line no-unused-vars
export default (boardCount = 1, maxCardCount = 10, maxUserCount = 5) => {
  const boards = [];
  const cardCount = randomBetween(4, maxCardCount);
  const userCount = randomBetween(2, maxUserCount);

  for (let i = 0; i < boardCount; i++) {
    const bord = makeBoard();

    for (let j = 0; j < cardCount; j++) {
      const card = makeCard();
      bord.cards.push(card);

      for (let k = 0; k < userCount; k++) {
        const user = makeUser();
        card.users.push(user);
      }
    }

    boards.push(bord);
  }

  return boards;
};
